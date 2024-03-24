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
  href?: string
}

const TravelCard = ({
  $img,
  $title,
  $flight,
  $hotel,
  $flightPrice,
  $hotelPrice,
  href = '/'
}: TravelCardProps) => (
  <Styled.Wrapper>
    <Styled.ImageBox>
      <Styled.ImageItem
        fill
        src={$img}
        alt={$title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Styled.ImageBox>
    <Heading $withHorizontalLine $color="dark">
      {$title}
    </Heading>
    <Styled.TravelWrapper>
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
    </Styled.TravelWrapper>

    <Button as={Link} href={href}>
      View details
    </Button>
  </Styled.Wrapper>
)

export default TravelCard
