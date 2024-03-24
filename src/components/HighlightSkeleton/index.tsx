import * as Styled from './styles'

const HighlightSkeleton = () => (
  <Styled.Wrapper aria-hidden>
    <Styled.ImageBox />
    <Styled.TitleWrapper />
    <Styled.List />
  </Styled.Wrapper>
)

export default HighlightSkeleton
