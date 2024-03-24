'use client'

import * as Styled from './styles'

import { Flight, Hotel, Place } from '@prisma/client'
import { useEffect, useState } from 'react'
import Base from '../Base'
import Highlight from '@/components/Highlight'
import Heading from '@/components/Heading'
import Banner from '@/components/Banner'
import FlightStopsIcon from '@/components/FlightStopsIcon'
import ReviewBar from '@/components/ReviewBar'
import HighlightSkeleton from '@/components/HighlightSkeleton'
import BannerSkeleton from '@/components/BannerSkeleton'

export type DetailProps = {
  $id: string
}

export default function Detail({ $id }: DetailProps) {
  const [place, setPlace] = useState<Place>()
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [flights, setFlights] = useState<Flight[]>([])

  const [isHighlightLoaded, setIsHighlightLoaded] = useState(false)
  const [isFlightBannerLoaded, setIsFlightBannerLoaded] = useState(false)
  const [isHotelBannerLoaded, setIsHotelBannerLoaded] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setIsHighlightLoaded(false)
        setIsFlightBannerLoaded(false)
        setIsHotelBannerLoaded(false)

        const placeResponse = await fetch(`/api/places/${$id}`)

        if (!placeResponse.ok) {
          throw new Error('Failed to fetch place. Please try again later.')
        }

        const placeData = await placeResponse.json()
        setPlace(placeData.place)
        setIsHighlightLoaded(true)

        if (placeData.place) {
          const placeName = placeData.place.name

          const flightsResponse = await fetch(
            `/api/flights?place=${encodeURIComponent(placeName)}`
          )
          if (!flightsResponse.ok) {
            throw new Error('Failed to fetch flights. Please try again later.')
          }
          const flightsData = await flightsResponse.json()
          setFlights(flightsData.flights)
          setIsFlightBannerLoaded(true)

          const hotelsResponse = await fetch(
            `/api/hotels?place=${encodeURIComponent(placeName)}`
          )
          if (!hotelsResponse.ok) {
            throw new Error('Failed to fetch hotels. Please try again later.')
          }
          const hotelsData = await hotelsResponse.json()
          setHotels(hotelsData.hotels)
          setIsHotelBannerLoaded(true)
        }
      } catch (error) {
        console.error('Error occurred during details fetch:', error)
      }
    }
    fetchDetails()
  }, [$id])

  return (
    <Base>
      <Styled.Wrapper>
        {!isHighlightLoaded && <HighlightSkeleton />}
        {place && (
          <Highlight
            $img={place.image_url}
            $title={place.name}
            $subtitle={place.country}
            $tags={place.tags}
          />
        )}

        <Styled.DetailsWrapper>
          <Heading $withVerticalLine>Flights</Heading>
          <Styled.BannerWrapper>
            {!isFlightBannerLoaded && <BannerSkeleton $count={2} />}
            {flights.map((flight) => (
              <Banner
                key={flight.id}
                $title={` Operated by ${flight.company}`}
                $icon={<FlightStopsIcon $stops={flight.stops} />}
                $iconInfo={flight.stops ? `${flight.stops} stop(s)` : 'Direct'}
                $priceValue={`$${flight.price}`}
              />
            ))}
          </Styled.BannerWrapper>

          <Heading $withVerticalLine>Hotels</Heading>
          <Styled.BannerWrapper>
            {!isHotelBannerLoaded && <BannerSkeleton $count={2} />}
            {hotels.map((hotel) => (
              <Banner
                key={hotel.id}
                $title={hotel.name}
                $icon={<ReviewBar $totalFilled={hotel.rating} />}
                $iconInfo={`${hotel.rating} stars`}
                $priceValue={`$${hotel.price_per_night}`}
              />
            ))}
          </Styled.BannerWrapper>
        </Styled.DetailsWrapper>
      </Styled.Wrapper>
    </Base>
  )
}
