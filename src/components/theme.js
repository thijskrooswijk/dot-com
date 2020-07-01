const Theme = {
  breakpoints: ["544px", "768px", "1012px", "1280px"],
  maxWidths: {
    small: "544px",
    medium: "768px",
    large: "1012px",
    xlarge: "1280px",
  },
  fonts: {
    normal: [
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    ],
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600,
  },
  colors: {
    black: "black",
    rebeccapurple: "rebeccapurple",
  },
  borders: [0, "1px solid"],
  fontSizes: [12, 16, 18],
  lineHeights: 1.25,
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
}

export default Theme
