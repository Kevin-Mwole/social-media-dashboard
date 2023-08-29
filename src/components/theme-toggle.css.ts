import { createVar, style } from "@vanilla-extract/css"

import { calc } from "@vanilla-extract/css-utils"
import { designTokens } from "src/styles/global.css"

export const themeToggle = style({
  border: "none",
  background: "none",
  fontSize: designTokens.typography.fontSize.small,
  fontWeight: 700,
  color: designTokens.color.text.muted,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.75rem",
  paddingBlock: "1rem",
  paddingInline: 0,

  selectors: {
    "&[aria-pressed=true]": {
      color: designTokens.color.text.bold,
    },
  },
})

const sliderHeight = createVar()
const sliderPadding = createVar()
const thumbSize = createVar()

export const slider = style({
  height: sliderHeight,
  width: calc.multiply(2, sliderHeight),
  background: "hsl(230, 22%, 74%)",
  display: "inline-block",
  borderRadius: "999px",
  overflow: "hidden",
  position: "relative",

  vars: {
    [sliderHeight]: "1.5rem",
    [sliderPadding]: "3px",
    [thumbSize]: calc.subtract(sliderHeight, calc.multiply(sliderPadding, 2)),
  },

  // the slider gradient background
  ":before": {
    content: "",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: "linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%)",
    opacity: 0,
  },

  // the slider thumb
  ":after": {
    content: "",
    position: "absolute",
    top: sliderPadding,
    right: sliderPadding,
    width: thumbSize,
    height: thumbSize,
    backgroundColor: designTokens.color.background.decoration,
    borderRadius: "50%",
  },

  selectors: {
    [`${themeToggle}[aria-pressed=true] > &:before`]: {
      opacity: 1,
    },
    [`${themeToggle}[aria-pressed=true] > &:after`]: {
      transform: `translateX(${calc.negate(sliderHeight)})`,
    },
  },
})
