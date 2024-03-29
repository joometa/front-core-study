import { HTMLAttributes, ReactNode } from 'react'
import { button as style, ButtonCSSPropType } from './Button.css'

interface Button extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

type Props = Button & ButtonCSSPropType

export const Button = ({
  children,
  color = 'primary',
  size = 'small',
  disabled = false,
  full = false,
  weak = false,
  ...props
}: Props) => {
  return (
    <button {...props} className={style({ color, size, disabled, full, weak })}>
      {children}
    </button>
  )
}
