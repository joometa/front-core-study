import { style } from '@vanilla-extract/css'
import * as u from '@styles/utils.css'

export const container = style([
  u.dimmedLayer,
  {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
])
