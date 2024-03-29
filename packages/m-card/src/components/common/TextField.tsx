import {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'
import { style, type TextFieldCSSPropTypes } from './TextField.css'
import { Text, Input } from './index'

interface TextField extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMessage?: React.ReactNode
}

type Props = TextField & TextFieldCSSPropTypes

const UITextField = (props: Props, ref: any) => {
  const { label, hasError, onFocus, onBlur } = props
  const [focused, setFocused] = useState<boolean>(false)
  const labelColor = hasError ? 'red' : focused ? 'blue' : 'grey'

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(true)
    onFocus?.(e)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(false)
    onBlur?.(e)
  }

  return (
    <div className={style()}>
      {label ? (
        <Text
          typography="t5"
          color={labelColor}
          display="inline-block"
          style={{ marginBottom: 6 }}
        >
          {label}
        </Text>
      ) : (
        <></>
      )}
      <Input
        ref={ref}
        invalid={hasError}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export const TextField = forwardRef(UITextField)
TextField.displayName = 'TextField'
