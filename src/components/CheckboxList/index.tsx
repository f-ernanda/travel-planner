import Checkbox from '../Checkbox'
import * as Styled from './styles'

type CheckboxListProps = {
  tags: string[]
  selectedTags: string[]
  onChange: (tag: string, checked: boolean) => void
}

const CheckboxList = ({ tags, selectedTags, onChange }: CheckboxListProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    onChange(value, checked)
  }

  return (
    <Styled.Wrapper>
      {tags.map((tag, index) => (
        <Checkbox
          key={index}
          value={tag}
          checked={selectedTags.includes(tag)}
          onChange={handleCheckboxChange}
          label={tag}
          labelFor={tag}
        />
      ))}
    </Styled.Wrapper>
  )
}

export default CheckboxList
