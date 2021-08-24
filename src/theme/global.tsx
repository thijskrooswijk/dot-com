import { css } from '@emotion/react'

export const globalStyle = css(`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #fff;
    background: #222;
    background: radial-gradient(68.13% 100% at 100% 0,#dd5ce5 0,rgba(221,92,229,0) 100%),linear-gradient(95.52deg,#000,rgba(0,0,0,0)),linear-gradient(0deg,#5436da,#5436da),#6e6e80;
  }
  
  .right {
    animation: rotate-right linear 8s infinite;
  }
  
  .left {
    animation: rotate-left linear 8s infinite;
  }
  
  @keyframes rotate-right {
    100% { transform: rotate(360deg); }
  }
  
  @keyframes rotate-left {
    100% { transform: rotate(-360deg); }
  }
`)
