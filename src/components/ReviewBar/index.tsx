import { Star, StarHalf, StarOutline } from '@styled-icons/material-rounded'
import * as Styled from './styles'

type ReviewBarProps = {
  $totalFilled?: number
}

const ReviewBar = ({ $totalFilled = 5 }: ReviewBarProps) => {
  const totalStars = 5

  const stars = Array.from({ length: totalStars }, (_, i) => {
    if (i < $totalFilled) {
      return i + 0.5 < $totalFilled ? (
        <Star className="star-filled" key={i} />
      ) : (
        <StarHalf className="star-half" key={i} />
      )
    } else {
      return <StarOutline className="star-outline" key={i} />
    }
  })

  return <Styled.Wrapper>{stars}</Styled.Wrapper>
}

export default ReviewBar
