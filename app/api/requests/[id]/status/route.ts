import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, context: any) {
  const id = context.params.id;

  const body = await req.json();
  const { status } = body;

  if (!["accepted", "rejected"].includes(status)) {
    return NextResponse.json(
        { error: "Недопустимый статус" },
        { status: 400 }
    );
  }

  try {
    const updated = await prisma.request.update({
      where: { id: Number(id) },
      data: { status },
    });

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
        { error: "Ошибка при обновлении" },
        { status: 500 }
    );
  }
}
