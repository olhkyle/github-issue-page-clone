import styled from '@emotion/styled'
import React, { useState } from 'react'
import Button from './commons/Button'
import { ButtonProps } from './Header'

const Section = () => {
  const issueBtn: ButtonProps = {
    backgroundColor: 'green',
    fontColor: 'white',
    fontSize: '14px',
  }

  const [inputValue, setInputValue] = useState<string>('is:pr is:open')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <ListContainer>
      <Wrapper>
        <Input value={inputValue} type="text" onChange={handleInputChange} />
        <Button issueBtn={issueBtn}>New Issue</Button>
      </Wrapper>
    </ListContainer>
  )
}

export default Section

const ListContainer = styled.div`
  padding: 0 2rem;
  margin-top: 24px;
  height: 220px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  margin-right: auto;
  padding-left: 10px;
  width: 60%;
  border-radius: 6px;
  border: 1px solid #d0d7de;
  color: #57606a;
  background: #f6f8fa;
`
