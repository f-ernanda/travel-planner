import Heading from '../Heading'
import * as Styled from './styles'

export type HighlightProps = {
  $img: string
  $title: string
  $subtitle: string
  $tags: string[]
}

const Highlight = ({ $img, $title, $subtitle, $tags }: HighlightProps) => (
  <Styled.Wrapper>
    <Styled.ImageBox>
      <Styled.ImageItem
        fill
        src={$img}
        alt={$title}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        priority
      />
    </Styled.ImageBox>

    <Styled.TitleWrapper>
      <Heading $withHorizontalLine $color="dark">
        {$title}
      </Heading>
      <h3>{$subtitle}</h3>
    </Styled.TitleWrapper>

    <Styled.List>
      {$tags.map((tag) => (
        <Styled.ListItem key={tag}>{tag}</Styled.ListItem>
      ))}
    </Styled.List>
  </Styled.Wrapper>
)

export default Highlight
