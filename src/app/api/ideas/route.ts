import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import { ideaInputSchema } from '@/lib/validations/idea';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET(request: Request, response: Response) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(null, { status: 403 });
  }
  const { id } = session.user;
  try {
    const ideas = await db.idea.findMany({
      select: { id: true, content: true, createdAt: true },
      where: { authorId: id },
    });
    return NextResponse.json({ ideas });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function POST(request: Request, response: Response) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(null, { status: 403 });
  }
  const { id } = session.user;
  const ideaResult = await request.json();
  const idea = ideaInputSchema.parse(ideaResult);

  try {
    const ideas = await db.idea.create({
      data: { ...idea, authorId: id },
      select: { id: true },
    });
    return NextResponse.json({ id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
