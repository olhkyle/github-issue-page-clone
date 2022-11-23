import styled from '@emotion/styled'
import Button from './components/commons/Button'

export interface ButtonProps {
  backgroundColor: string
  fontColor: string
  fontSize: string
}

function App() {
  const issueBtn: ButtonProps = {
    backgroundColor: 'green',
    fontColor: 'white',
    fontSize: '14px',
  }

  return (
    <>
      <Nav>
        <h1>hello</h1>
      </Nav>
      <Header>header</Header>
      <ListContainer>listcontainer</ListContainer>
      <Footer>footer</Footer>
      <Button issueBtn={issueBtn} />
    </>
  )
}

export default App

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  background-color: #24292f;
  color: rgba(255, 255, 255, 0.7);
`

const Header = styled.div`
  padding: 1rem 2rem;
  background-color: rgb(246, 248, 250);
  height: 96px;
  box-shadow: inset 0 -1px 0 hsla(210, 18%, 87%, 1);
`

const ListContainer = styled.div`
  padding: 0 2rem;
  margin-top: 24px;
  height: 220px;
`

const Footer = styled.div`
  margin-top: 40px;
  padding: 40px 16px 8px;
  border-top: 1px solid #d0d7de;
`
