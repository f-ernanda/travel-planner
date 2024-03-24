import * as Styled from './styles'

type BannerSkeletonProps = {
  $count?: number
}

const BannerSkeleton = ({ $count = 1 }: BannerSkeletonProps) => {
  const skeletons = Array.from({ length: $count }).map((_, index) => (
    <Styled.Wrapper key={index}>
      <Styled.Heading />
      <Styled.IconWrapper />
      <Styled.Footer />
    </Styled.Wrapper>
  ))

  return <>{skeletons}</>
}

export default BannerSkeleton
