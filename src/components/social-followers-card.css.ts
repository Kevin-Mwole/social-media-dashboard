import * as brandTheme from "src/styles/brand.css"

import { box, stack } from "src/styles/layout.css"
import { createVar, style } from "@vanilla-extract/css"

import { designTokens } from "src/styles/global.css"
import { recipe } from "@vanilla-extract/recipes"

export const card = style([
  box,
  stack({ size: "small" }),
  {
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",

    ":before": {
      content: "",
      background: brandTheme.brandTokens.background,
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
    },
  },
])

export const header = style({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
})

export const socialHandle = style({
  textDecoration: "none",
  fontWeight: 700,
  color: "inherit",
  fontSize: designTokens.typography.fontSize.extraSmall,
})

export const followers = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
})

export const value = style({
  fontSize: designTokens.typography.fontSize.extraLarge,
  fontWeight: 700,
  color: designTokens.color.text.bold,
  lineHeight: "1",
})

export const metric = style({
  fontSize: designTokens.typography.fontSize.extraSmall,
  textTransform: "uppercase",
  letterSpacing: "5px",
})

export const footer = recipe({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: designTokens.typography.fontSize.extraSmall,
    fontWeight: 700,
  },

  variants: {
    direction: {
      up: {
        color: designTokens.color.green,
      },
      down: {
        color: designTokens.color.red,
      },
    },
  },
})
