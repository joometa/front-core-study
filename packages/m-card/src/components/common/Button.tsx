import { ReactNode } from 'react'
import { button as style, ButtonCSSPropType } from './Button.css'

type Props = {
  children?: ReactNode
} & ButtonCSSPropType

export const Button = ({
  children,
  color = 'primary',
  size = 'small',
  disabled = false,
  full = false,
  weak = false,
}: Props) => {
  return (
    <button className={style({ color, size, disabled, full, weak })}>
      {children}
    </button>
  )
}
