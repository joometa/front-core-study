import { CSSProperties, ReactNode } from 'react'
import * as style from './Flex.css'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  children?: ReactNode
}

export const Flex = (props: FlexProps) => {
  const { align, justify, direction, children } = props
  return (
    <div
      className={style.flex}
      style={{
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  )
}
