import { recipe } from '@vanilla-extract/recipes'
import { colors } from '@styles/color.css'
import { typo } from '@styles/typo.css'

export const text = recipe({
  base: [],
  variants: {
    color: colors,
    typo: typo,
  },
})
