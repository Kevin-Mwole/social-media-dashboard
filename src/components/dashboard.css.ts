import { center, stack } from "src/styles/layout.css"
import { globalStyle, style } from "@vanilla-extract/css"

import { designTokens } from "src/styles/global.css"

export const dashboard = style([
  center,
  stack({ size: "large" }),
  {
    paddingBlock: "2rem",
  },
])

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "1.5rem",
  fontWeight: 700,

  "@media": {
    "screen and (max-width: 640px)": {
      flexDirection: "column",
    },
  },
})

// header divider
globalStyle(`${header} > :nth-child(2)`, {
  "@media": {
    "screen and (max-width: 640px)": {
      borderTop: "1px solid",
      borderColor: designTokens.color.divider,
    },
  },
})

export const h1 = style({
  fontSize: designTokens.typography.fontSize.large,
  color: designTokens.color.text.bold,
})
export const h2 = style({
  fontSize: designTokens.typography.fontSize.medium,
  color: designTokens.color.text.bold,
})
