import styled from '@emotion/styled'

interface CircleNumberProps {
  count: number
}

const CircleNumber = ({ count }: CircleNumberProps) => {
  return <S.Circle>{count}</S.Circle>
}

export default CircleNumber

const S: any = {}

S.Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 50%;
  background-color: #c0c0c0;
  color: white;
`
