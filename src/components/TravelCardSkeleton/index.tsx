import * as Styled from './styles'

type TravelCardSkeletonProps = {
  $count?: number
}

const TravelCardSkeleton = ({ $count = 1 }: TravelCardSkeletonProps) => {
  const skeletons = Array.from({ length: $count }).map((_, index) => (
    <Styled.Wrapper key={index} aria-hidden>
      <Styled.ImageBox />
      <Styled.Heading />
      <Styled.TravelWrapper />
    </Styled.Wrapper>
  ))

  return <>{skeletons}</>
}

export default TravelCardSkeleton
