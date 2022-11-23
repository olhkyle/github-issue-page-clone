import styled from '@emotion/styled'
import CircleNumber from './CircleNumber'

interface TabProps {
  title: string
  number: number
  selected: boolean
  onClick: () => void
}

const Tab = ({ title, number, selected, onClick }: TabProps) => {
  return (
    <Wrapper selected={selected}>
      <Button onClick={onClick}>
        <span>{title}</span>
        {number && <CircleNumber count={number} />}
      </Button>
    </Wrapper>
  )
}

export default Tab

const Wrapper = styled.li<{ selected: boolean }>`
  min-width: 150px;
  ${({ selected }) => selected && 'border-bottom: 2px solid #fa4548'}
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  margin-right: 10px;
  border: none;
  background-color: transparent;

  &:active span {
    font-weight: 700;
  }
`
