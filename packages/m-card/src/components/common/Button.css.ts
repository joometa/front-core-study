import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { colors } from '@styles/color.css'

export const button = recipe({
  base: [
    {
      cursor: 'pointer',
      fontWeight: 'bold',
      borderRadius: '0.6rem',
    },
  ],
  variants: {
    size: {
      small: { fontSize: '1.3rem', padding: '8px 9px' },
      medium: { fontSize: '1.5rem', padding: '10px 15px' },
      large: { fontSize: '1.8rem', padding: '12px 10px' },
    },
    color: {
      primary: {
        backgroundColor: colors.blue,
        color: colors.white,
      },
      success: {
        backgroundColor: colors.green,
        color: colors.white,
      },
      error: {
        backgroundColor: colors.red,
        color: colors.white,
      },
    },
    disabled: {
      true: {
        opacity: '0.26',
        cursor: 'initial',
      },
    },
    full: {
      true: {
        display: 'block',
        width: '100%',
        borderRadius: '0',
      },
    },
    weak: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        color: 'primary',
        weak: true,
      },
      style: {
        backgroundColor: colors.white,
        border: `1px solid ${colors.blue}`,
        color: colors.blue,
      },
    },
    {
      variants: {
        color: 'success',
        weak: true,
      },
      style: {
        backgroundColor: colors.white,
        border: `1px solid ${colors.green}`,
        color: colors.green,
      },
    },
    {
      variants: {
        color: 'error',
        weak: true,
      },
      style: {
        backgroundColor: colors.white,
        border: `1px solid ${colors.red}`,
        color: colors.red,
      },
    },
  ],
})

export type ButtonVariants = RecipeVariants<typeof button>
