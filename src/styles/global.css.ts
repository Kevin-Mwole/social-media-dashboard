import {
  assignVars,
  createGlobalTheme,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css"

export const mainTokens = createGlobalTheme(":root", {
  typography: {
    fontSize: {
      extraSmall: "0.75rem",
      small: "1rem",
      medium: "1.5rem",
      large: "2rem",
      extraLarge: "3.5rem",
    },
  },
  animation: {
    transitionDuration: "250ms",
    transitionTimingFunction: "ease-in-out",
  },
})

const themeTokens = createThemeContract({
  color: {
    green: null,
    red: null,
    text: {
      bold: null,
      normal: null,
      muted: null,
    },
    background: {
      main: null,
      card: null,
      cardHoverBrightness: null,
      decoration: null,
    },
    divider: null,
  },
})

const lightTheme = {
  vars: assignVars(themeTokens, {
    color: {
      green: "hsl(163, 88%, 26%)",
      red: "hsl(356, 69%, 49%)",
      text: {
        bold: "hsl(230, 17%, 14%)",
        normal: "hsl(230, 12%, 44%)",
        muted: "hsl(230, 22%, 52%)",
      },
      background: {
        main: "hsl(0, 0%, 100%)",
        card: "hsl(0, 0%, 95%)",
        cardHoverBrightness: "0.9",
        decoration: "hsl(225, 100%, 98%)",
      },
      divider: "hsl(230, 19%, 60%)",
    },
  }),
}

const darkTheme = {
  vars: assignVars(themeTokens, {
    color: {
      green: "hsl(163, 72%, 41%)",
      red: "hsl(356, 69%, 66%)",
      text: {
        bold: "hsl(0, 0%, 100%)",
        normal: "hsl(228, 34%, 77%)",
        muted: "hsl(228, 34%, 77%)",
      },
      background: {
        main: "hsl(230, 17%, 14%)",
        card: "hsl(228, 28%, 20%)",
        cardHoverBrightness: "1.3",
        decoration: "hsl(232, 19%, 15%)",
      },
      divider: "hsla(228, 25%, 27%)",
    },
  }),
}

globalStyle(":root", lightTheme)

globalStyle(`:root:not([data-user-theme=light])`, {
  "@media": {
    "screen and (prefers-color-scheme: dark)": darkTheme,
  },
})

globalStyle(":root[data-user-theme=dark]", darkTheme)

export const designTokens = {
  ...mainTokens,
  ...themeTokens,
}

globalStyle("html", {
  fontFamily: "Inter, sans-serif",
  color: designTokens.color.text.normal,
})

globalStyle("body", {
  position: "relative",
  backgroundColor: designTokens.color.background.main,
})

globalStyle("body::before", {
  content: "",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "25vh",
  backgroundColor: designTokens.color.background.decoration,
  zIndex: -1,
})

globalStyle("*, *::after, *::before", {
  transitionDuration: designTokens.animation.transitionDuration,
  transitionTimingFunction: designTokens.animation.transitionTimingFunction,
  transitionProperty: "opacity, transform, color, background-color",
})

function toSnakeCase(input: string): string {
  return input
    .split("")
    .map((character, index) => {
      const prefix = index > 0 ? "_" : ""
      return character === character.toUpperCase()
        ? `${prefix}${character}`
        : character
    })
    .join("")
}
