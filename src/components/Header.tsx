import styled from '@emotion/styled'
import Button from './commons/Button'
import CircleNumber from './commons/CircleNumber'
import Space from './commons/Space'

export interface ButtonProps {
  backgroundColor: string
  fontColor: string
  fontSize: string
}

const Header = () => {
  const issueBtnTrans: ButtonProps = {
    backgroundColor: 'transparent',
    fontColor: 'black',
    fontSize: '14px',
  }
  return (
    <Wrapper>
      <Button issueBtn={issueBtnTrans}>
        Watch
        <CircleNumber />
      </Button>
      <Space />
      <Button issueBtn={issueBtnTrans}>Fork</Button>
      <Space />
      <Button issueBtn={issueBtnTrans}>Star</Button>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  background-color: rgb(246, 248, 250);
  box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
`
