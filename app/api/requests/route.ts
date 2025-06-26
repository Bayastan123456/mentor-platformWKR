// app/api/requests/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { fromId, toId } = await req.json();

  if (!fromId || !toId) {
    return NextResponse.json(
      { error: "Отсутствуют обязательные поля" },
      { status: 400 }
    );
  }

  // Проверка: не отправляли ли уже
  const existing = await prisma.request.findFirst({
    where: {
      fromId,
      toId,
      status: {
        in: ["pending", "accepted"],
      },
    },
  });

  if (existing) {
    return NextResponse.json(
      { error: "Заявка уже существует" },
      { status: 409 }
    );
  }

  const request = await prisma.request.create({
    data: {
      fromId,
      toId,
    },
  });

  return NextResponse.json(request, { status: 201 });
}
