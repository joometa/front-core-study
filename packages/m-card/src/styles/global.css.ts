import { globalLayer } from '@vanilla-extract/css'
import { createGlobalTheme } from '@vanilla-extract/css'
import { colors } from './color.css'

globalLayer('reset')
globalLayer('framework')
globalLayer({ parent: 'framework' }, 'typography')

export const vars = createGlobalTheme(':root', {
  ...colors,
  fontSize: '62.5%',
})
