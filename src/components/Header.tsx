import styled from '@emotion/styled'
import Button from './commons/Button'
import CircleNumber from './commons/CircleNumber'
import Space from './commons/Space'
import Tab from './commons/Tab'
import TabList from './TabList'

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
  const number: number = 8
  return (
    <Wrapper>
      <ButtonContainer>
        <Button issueBtn={issueBtnTrans}>
          Watch
          <CircleNumber count={number} />
        </Button>
        <Space />
        <Button issueBtn={issueBtnTrans}>Fork</Button>
        <Space />
        <Button issueBtn={issueBtnTrans}>Star</Button>
      </ButtonContainer>
      <TabList />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  padding: 1rem 2rem 0;
  background-color: rgb(246, 248, 250);
  box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`
