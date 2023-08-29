import { createTheme, createThemeContract } from "@vanilla-extract/css"

export const brandTokens = createThemeContract({
  background: null,
})
export const facebook = createTheme(brandTokens, {
  background: "hsl(208, 92%, 53%)",
})
export const twitter = createTheme(brandTokens, {
  background: "hsl(203, 89%, 53%)",
})
export const instagram = createTheme(brandTokens, {
  background:
    "linear-gradient(225deg, hsl(329, 70%, 58%) 0%, hsl(5, 77%, 71%) 50.91%, hsl(37, 97%, 70%) 100%)",
})
export const youtube = createTheme(brandTokens, {
  background: "hsl(348, 97%, 39%)",
})
