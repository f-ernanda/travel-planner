import Button from '../Button'
import Heading from '../Heading'
import * as Styled from './styles'

type BannerProps = {
  $title: string
  $icon: React.ReactNode
  $iconInfo: string
  $priceValue: string
}

const Banner = ({ $title, $icon, $iconInfo, $priceValue }: BannerProps) => (
  <Styled.Wrapper>
    <Heading $withVerticalLine $color="dark">
      {$title}
    </Heading>
    <Styled.IconWrapper>
      {$icon}
      <p>{$iconInfo}</p>
    </Styled.IconWrapper>

    <Styled.Price>{$priceValue}</Styled.Price>
    <Button disabled>Book now</Button>
  </Styled.Wrapper>
)

export default Banner
