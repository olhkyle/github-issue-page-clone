import styled from '@emotion/styled'
import { useState } from 'react'
import ListItemLayout from './ListItemLayout'

interface ListItemProps {
  onClickTitle: () => void
}

const ListItem = ({ onClickTitle }: ListItemProps) => {
  return (
    <ListItemLayout checked={true} onChangeCheckbox={() => {}}>
      <div>
        <Title role="button" onClick={onClickTitle}>
          Issue Example
        </Title>
        <Desc># Description</Desc>
      </div>
    </ListItemLayout>
  )
}

export default ListItem

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: #0969da;
  }
`

const Desc = styled.div`
  color: rgb(87, 96, 106);
  font-size: 12px;
`
