// app/api/messages/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { senderId, receiverId, text } = body;

    if (!senderId || !receiverId || !text) {
      return NextResponse.json(
        { error: "Заполните все поля" },
        { status: 400 }
      );
    }

    const message = await prisma.message.create({
      data: { senderId, receiverId, text },
    });

    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error("Ошибка при сохранении:", error);
    return NextResponse.json(
      { error: "Ошибка при сохранении сообщения" },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const user1 = searchParams.get("user1");
  const user2 = searchParams.get("user2");

  if (!user1 || !user2) {
    return NextResponse.json(
      { error: "Пользователи не указаны" },
      { status: 400 }
    );
  }

  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: Number(user1), receiverId: Number(user2) },
          { senderId: Number(user2), receiverId: Number(user1) },
        ],
      },
      orderBy: { createdAt: "asc" },
      include: {
        sender: true,
        receiver: true,
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при получении" },
      { status: 500 }
    );
  }
}
