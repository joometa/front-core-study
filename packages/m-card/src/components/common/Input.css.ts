import { colors } from '@/styles/color.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const style = recipe({
  base: [
    {
      padding: '0 16px',
      fontSize: '1.5rem',
      height: '4.8rem',
      fontWeight: '500',
      border: `1px solid ${colors.grey}`,
      borderRadius: '0.6rem',
      width: '100%',
      boxSizing: 'border-box',
      ':focus': {
        outline: 'none',
        borderColor: colors.blue,
      },
    },
  ],
  variants: {
    invalid: {
      true: {
        borderColor: colors.red,
      },
    },
  },
  compoundVariants: [],
})

export type InputCSSPropType = RecipeVariants<typeof style>
