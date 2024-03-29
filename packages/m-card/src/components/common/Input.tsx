import { InputHTMLAttributes } from 'react'
import { style, type InputCSSPropType } from './Input.css'

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  children?: string
  ref?: any
}

type Props = Input & InputCSSPropType

export const Input = (props: Props) => {
  const { placeholder, invalid, ..._props } = props
  return (
    <input
      {..._props}
      type="text"
      className={style({ invalid })}
      placeholder={placeholder}
    />
  )
}
