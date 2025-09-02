import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { title, category, description, imageUrl } = await req.json();
  const project = await prisma.project.create({
    data: { title, category, description, imageUrl },
  });
  return NextResponse.json(project);
}
