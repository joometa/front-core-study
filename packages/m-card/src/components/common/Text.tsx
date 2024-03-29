import { colors } from '@styles/color.css'
import { typo } from '@styles/typo.css'
// import {  } from '@vanilla-extract/css'
import * as s from './Text.css'
import React, { ReactNode, CSSProperties, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color?: keyof typeof colors
  typography?: keyof typeof typo
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  bold?: boolean
  children?: ReactNode
}

export const Text = ({
  color = 'black',
  typography = 't5',
  display,
  textAlign,
  fontWeight,
  bold,
  children,
  style,
}: Props) => {
  return (
    <span
      className={s.text({ typo: typography })}
      style={{
        display: display,
        textAlign,
        fontWeight: `${bold ? 'bold' : fontWeight}`,
        color: colors[color],
        ...style,
      }}
    >
      {children}
    </span>
  )
}
