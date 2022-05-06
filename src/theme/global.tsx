import { css } from "@emotion/react"
import { renderGradiant } from "../lib/render-gradient"
import "inter-ui/inter.css"

export const globalStyle = css(`
  :root { 
    font-family: 'Inter', 'system-ui', sans-serif;
    --text-color: hsla(0deg 0% 100% / 100%);
    --list-color: hsla(0deg 0% 100% / 65%);
    --link-color: hsla(167deg 100% 44% / 100%);
  }

  @supports (font-variation-settings: normal) {
    :root { font-family: 'Inter var', 'system-ui', sans-serif; }
  }

  body {
    font-size: 18px;
    letter-spacing: -.011em;
    line-height: 1.45;
    background: ${renderGradiant()};
    background-attachment: fixed;
  }
`)
