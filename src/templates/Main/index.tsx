'use client'
import * as Styled from './styles'

import Menu from '@/components/Menu'
import Heading from '@/components/Heading'
import TravelCard from '@/components/TravelCard'
import Footer from '@/components/Footer'
import { Container } from '@/utils/container-utils'
import { useState } from 'react'
import CheckboxList from '@/components/CheckboxList'
import Button from '@/components/Button'
import { TravelResult } from '@/types/results'

const TAGS = [
  'Charming',
  'Foodie',
  'Nightlife',
  'Architecture',
  'History',
  'Museums',
  'Performing Arts',
  'Music',
  'Beach Town',
  'Outdoorsy'
]

const Main = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchResults, setSearchResults] = useState<TravelResult[]>([])

  const handleCheckboxChange = (tag: string, checked: boolean) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag])
    } else {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag))
    }
  }

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedTags })
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const { results } = await response.json()
      setSearchResults(results)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <Styled.Wrapper>
      <Container>
        <Styled.MenuContainer>
          <Menu />
        </Styled.MenuContainer>

        <Styled.SearchContainer>
          <Heading $withVerticalLine>Describe your next trip</Heading>
          <CheckboxList
            $tags={TAGS}
            $selectedTags={selectedTags}
            onChange={handleCheckboxChange}
          />
          <Button onClick={handleSearch}>Search</Button>
        </Styled.SearchContainer>

        <Styled.TravelList>
          <Heading $withVerticalLine>Your results</Heading>
          {searchResults.map((result, index) => (
            <TravelCard
              key={index}
              $img={result.place.image_url}
              $title={result.place.name}
              $flight={
                result.bestFlight
                  ? `${result.bestFlight.stops} stops`
                  : 'No available flights'
              }
              $flightPrice={
                result.bestFlight ? `$${result.bestFlight.price}` : 'N/A'
              }
              $hotel={
                result.bestHotel
                  ? `${result.bestHotel.rating} stars`
                  : 'No available hotels'
              }
              $hotelPrice={
                result.bestHotel
                  ? `$${result.bestHotel.price_per_night}`
                  : 'N/A'
              }
            />
          ))}
        </Styled.TravelList>

        <Styled.FooterContainer>
          <Footer />
        </Styled.FooterContainer>
      </Container>
    </Styled.Wrapper>
  )
}

export default Main
