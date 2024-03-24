import { Star, StarHalf, StarOutline } from '@styled-icons/material-rounded'
import * as Styled from './styles'

type ReviewBarProps = {
  $totalFilled: number
}

const ReviewBar = ({ $totalFilled }: ReviewBarProps) => {
  const totalStars = 5
  const stars = []

  for (let i = 0; i < totalStars; i++) {
    if (i < $totalFilled) {
      if (i + 0.5 < $totalFilled) {
        stars.push(<Star key={i} />)
      } else {
        stars.push(<StarHalf key={i} />)
      }
    } else {
      stars.push(<StarOutline key={i} />)
    }
  }

  return <Styled.Wrapper>{stars}</Styled.Wrapper>
}

export default ReviewBar
