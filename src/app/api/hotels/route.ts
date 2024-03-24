import { prisma } from '@/lib/db/prisma'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const param = searchParams.get('place')

  try {
    if (param) {
      const hotels = await prisma.hotel.findMany({
        where: {
          place: param
        },
        orderBy: {
          price_per_night: 'asc'
        }
      })

      return NextResponse.json({ hotels }, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while processing your request.', error },
      { status: 500 }
    )
  }
}
