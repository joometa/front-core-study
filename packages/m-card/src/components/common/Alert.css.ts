import { style } from '@vanilla-extract/css'
import { colors } from '@styles/color.css'
import * as u from '@styles/utils.css'

export const container = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  backgroundColor: colors.white,
  borderRadius: '8px',
  overflow: 'hidden',
  zIndex: u.alertLayer,
  width: '320px',
  padding: '24px',
  boxSizing: 'border-box',
})
