import styled from '@emotion/styled'
import Button from './commons/Button'
import { ButtonProps } from './Header'

const Section = () => {
  const issueBtn: ButtonProps = {
    backgroundColor: 'green',
    fontColor: 'white',
    fontSize: '14px',
  }
  return (
    <ListContainer>
      <Button issueBtn={issueBtn}>New Issue</Button>
    </ListContainer>
  )
}

export default Section

const ListContainer = styled.div`
  padding: 0 2rem;
  margin-top: 24px;
  height: 220px;
`
