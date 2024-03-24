import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const place = await prisma.place.findUnique({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({ place }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while processing your request.', error },
      { status: 500 }
    )
  }
}
