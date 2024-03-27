import { ReactNode } from 'react'
import * as style from './Button.css'

interface Props {
  children?: ReactNode
  color?: 'primary' | 'success' | 'error'
  size?: 'small' | 'medium' | 'large'
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

export const Button = ({
  children,
  color = 'primary',
  size = 'small',
  disabled = false,
  full = false,
  weak = false,
}: Props) => {
  return (
    <button className={style.button({ color, size, disabled, full, weak })}>
      {children}
    </button>
  )
}
