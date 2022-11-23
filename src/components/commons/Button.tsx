import styled from '@emotion/styled'
import { ButtonProps } from '../Header'

const Button = ({ issueBtn, children }: { issueBtn: ButtonProps; children: React.ReactNode }) => {
  const { backgroundColor, fontColor, fontSize } = issueBtn
  return (
    <C.Button background={backgroundColor} color={fontColor} fontSize={fontSize}>
      {children}
    </C.Button>
  )
}

export default Button

const C: any = {}
C.Button = styled.button<{ color: string; background: string; fontSize: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 1rem;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 36, 0.15);
  ${({ color }) => color && `color: ${color}`};
  ${({ background }) => background && `background-color: ${background}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`}
`
