import { prisma } from '@/lib/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const param = searchParams.get('place')

  try {
    if (param) {
      const flights = await prisma.flight.findMany({
        where: {
          place: param
        },
        orderBy: {
          price: 'asc'
        }
      })

      return NextResponse.json({ flights }, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while processing your request.', error },
      { status: 500 }
    )
  }
}
