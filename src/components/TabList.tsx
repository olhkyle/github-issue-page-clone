import styled from '@emotion/styled'
import { useState } from 'react'
import Tab from './commons/Tab'

const TabList = () => {
  const tabList: string[] = ['Code', 'Issue', 'Pull Request', 'Actions', 'Projects', 'Security', 'Insights', 'Settings']
  const [selectedTabIdx, setSelectedTabIdx] = useState<number>(0)
  return (
    <Wrapper>
      {tabList.map((tab, idx) => {
        return (
          <Tab
            key={`${tab}_${idx}`}
            title={tab}
            number={5}
            selected={selectedTabIdx === idx}
            onClick={() => {
              setSelectedTabIdx(idx)
            }}
          />
        )
      })}
    </Wrapper>
  )
}

export default TabList

const Wrapper = styled.ul`
  display: flex;
`
