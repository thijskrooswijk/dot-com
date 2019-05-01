import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    color: white;
    background-color: #222;
  }
  
  .box {
    @media (max-width: 768px) {
            flex-direction: column;
        }
    }
  
  a {
      color: gray;
  }
  
  .gatsby-image-wrapper {
    display: flex;
    flex: 1 0 25%;
    width: 100%;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    line-height: 1.45;
  }
  
  ul li {
    display: inline-block;
  }
  
  ul li:after {
    content: "\\00a0—\\00a0";
    opacity: .5;
  }
  
  ul li:last-child:after {
      content: "";
  }
  
  .right {
    animation: spin-right linear 8s infinite;
  }
  
  .right-negative {
    animation: spin-left linear 8s infinite;
  }
  
  .left {
    animation: spin-left linear 8s infinite;
  }
  
  .left-negative {
    animation: spin-right linear 8s infinite;
  }
  
  @keyframes spin-right {
    100% { transform: rotate(360deg); }
  }
  
  @keyframes spin-left {
    100% { transform: rotate(-360deg); }
  }
`
