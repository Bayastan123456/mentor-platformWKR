// app/api/profile/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, role, name, about, skills, goal } = body;

    if (!userId || !role || !name) {
      return NextResponse.json(
        { error: "Обязательные поля отсутствуют" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(userId) },
      data: { role, name, about, skills, goal },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Ошибка при обновлении профиля:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
