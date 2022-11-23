import styled from '@emotion/styled'

interface ListItemLayoutProps {
  checked: boolean
  onChangeCheckbox: () => void
  children: React.ReactNode
}

const ListItemLayout = ({ checked, onChangeCheckbox, children }: ListItemLayoutProps) => {
  return (
    <Wrapper>
      <CheckBox type="checkbox" checked={checked} onChange={onChangeCheckbox} />
      {children}
    </Wrapper>
  )
}

export default ListItemLayout

const Wrapper = styled.li`
  display: flex;
  padding: 0.75rem 1.5rem;
  border: 1px solid #d0d7de;
  border-radius: 6px 6px 0 0;
  border-bottom: none;
  background-color: rgb(246, 248, 250);
  background: #fff;

  &:last-child {
    border-bottom: 1px solid #d0d7de;
    border-radius: 0 0 6px 6px;
  }
`

const CheckBox = styled.input`
  margin-right: 8px;
  margin-top: 5px;
`
