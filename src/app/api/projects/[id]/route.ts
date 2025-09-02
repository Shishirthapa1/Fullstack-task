import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, category, description, imageUrl } = await req.json();
  const project = await prisma.project.update({
    where: { id: Number(params.id) },
    data: { title, category, description, imageUrl },
  });
  return NextResponse.json(project);
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await prisma.project.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ message: "Project deleted" });
}
