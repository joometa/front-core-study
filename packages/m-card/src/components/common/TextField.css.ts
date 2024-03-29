import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const style = recipe({
  base: [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  ],
  variants: {},
})

export type TextFieldCSSPropTypes = RecipeVariants<typeof style>
