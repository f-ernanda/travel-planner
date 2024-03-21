import { prisma } from '@/lib/db/prisma'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { selectedTags } = await req.json()

  try {
    const places = await prisma.place.findMany({
      where: {
        tags: {
          hasSome: selectedTags
        }
      }
    })

    const results = await Promise.all(
      places.map(async (place) => {
        const bestHotel = await prisma.hotel.findFirst({
          where: {
            place: place.name
          },
          orderBy: {
            price_per_night: 'asc'
          }
        })

        const bestFlight = await prisma.flight.findFirst({
          where: {
            place: place.name
          },
          orderBy: {
            price: 'asc'
          }
        })

        return { place, bestHotel, bestFlight }
      })
    )

    return NextResponse.json({ results }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
