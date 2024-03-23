import * as Styled from './styles'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import Link from 'next/link'

export type TravelCardProps = {
  $img: string
  $title: string
  $flight: string
  $hotel: string
  $flightPrice: string
  $hotelPrice: string
  href: string
}

const TravelCard = ({
  $img,
  $title,
  $flight,
  $hotel,
  $flightPrice,
  $hotelPrice,
  href
}: TravelCardProps) => (
  <Styled.Wrapper>
    <Styled.ImageBox>
      <Styled.ImageItem fill src={$img} alt={$title} />
    </Styled.ImageBox>
    <Heading $withHorizontalLine $color="dark">
      {$title}
    </Heading>
    <Styled.TravelContainer>
      <Styled.TravelItem>
        <span>Flights •&nbsp;</span>
        {$flight}
        <Styled.Price>{$flightPrice}</Styled.Price>
      </Styled.TravelItem>
      <Styled.TravelItem>
        <span>Hotels •&nbsp;</span>
        {$hotel}
        <Styled.Price>{$hotelPrice}</Styled.Price>
      </Styled.TravelItem>
    </Styled.TravelContainer>

    <Link href={href} style={{ textDecoration: 'none' }}>
      <Button as="a">View details</Button>
    </Link>
  </Styled.Wrapper>
)

export default TravelCard
