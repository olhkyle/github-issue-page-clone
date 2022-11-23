import styled from '@emotion/styled'
import { ButtonProps } from '../../App'

const Button = ({ issueBtn }: { issueBtn: ButtonProps }) => {
  const { backgroundColor, fontColor, fontSize } = issueBtn
  return (
    <C.Button background={backgroundColor} color={fontColor} fontSize={fontSize}>
      New Issue
    </C.Button>
  )
}

export default Button

const C: any = {}
C.Button = styled.button<{ color: string; background: string; fontSize: string }>`
  padding: 5px 1rem;
  border-radius: 6px;
  border: 1px solid rgba(27, 331, 0.1);
  ${({ color }) => color && `color: ${color}`};
  ${({ background }) => background && `background-color: ${background}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`}
`
