import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  const params = await context.params;

  const { title, category, description, imageUrl } = await req.json();
  const project = await prisma.project.update({
    where: { id: Number(params.id) },
    data: { title, category, description, imageUrl },
  });
  return NextResponse.json(project);
}

export async function DELETE(
  _: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await prisma.project.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: "Project deleted" });
}
