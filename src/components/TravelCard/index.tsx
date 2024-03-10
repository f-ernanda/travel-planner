import * as Styled from './styles'
import Heading from '@/components/Heading'
import Button from '@/components/Button'

export type TravelCardProps = {
  $img: string
  $title: string
  $flight: string
  $hotel: string
  $flightPrice: string
  $hotelPrice: string
}

const TravelCard = ({
  $img,
  $title,
  $flight,
  $hotel,
  $flightPrice,
  $hotelPrice
}: TravelCardProps) => (
  <Styled.Wrapper>
    <Styled.ImageBox>
      <Styled.ImageItem fill src={$img} alt={$title} />
    </Styled.ImageBox>
    <Heading $withHorizontalLine>{$title}</Heading>
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

    <Button>View details</Button>
  </Styled.Wrapper>
)

export default TravelCard
