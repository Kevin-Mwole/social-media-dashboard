import { designTokens } from "./global.css"
import { recipe } from "@vanilla-extract/recipes"
import { style } from "@vanilla-extract/css"

export const box = style({
  padding: "1.5rem",
  backgroundColor: designTokens.color.background.card,
})

export const stack = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
  },

  variants: {
    size: {
      small: {
        gap: "1.5rem",
      },
      large: {
        gap: "3rem",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
})

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
})

export const fullWidth = style({
  gridColumn: "1 / -1",
})

export const center = style({
  padding: "1.5rem",
  maxWidth: "1110px",
  boxSizing: "content-box",
  marginLeft: "auto",
  marginRight: "auto",
})
