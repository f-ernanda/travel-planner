export type TravelResult = {
  place: {
    id: string
    name: string
    country: string
    image_url: string
    tags: string[]
  } & {
    location: {
      latitude: number
      longitude: number
    }
  }
  bestHotel: {
    id: string
    place: string
    name: string
    price_per_night: number
    rating: number
    address: string
  } | null
  bestFlight: {
    id: string
    place: string
    departure_city: string | null
    departure_date: Date | null
    arrival_city: string | null
    arrival_date: Date | null
    price: number
    company: string
    stops: number
  } | null
}
