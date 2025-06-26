import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId обязателен" }, { status: 400 });
  }

  try {
    const requests = await prisma.request.findMany({
      where: {
        toId: Number(userId),
      },
      include: {
        from: true, // включает данные отправителя
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(requests);
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при получении заявок" },
      { status: 500 }
    );
  }
}
