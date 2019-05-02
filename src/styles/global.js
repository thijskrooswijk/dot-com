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
  
  .ring {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    background-color: transparent;
    border: 1px white solid;
    animation: ani infinite linear 6s;
    transform: scale(0.01);
    left: 0;
    top: 0;
  }
  
  @-webkit-keyframes ani {
    0 % {opacity: 0}
    5% {opacity: 1}
    90% {transform: scale(.9); opacity: 1}
    100% {transform: scale(1); opacity: 0}
  }
  
  #r2 {animation-delay: -1s}
  #r3 {animation-delay: -2s}
  #r4 {animation-delay: -3s}
  #r5 {animation-delay: -4s}
  #r6 {animation-delay: -5s}
`
