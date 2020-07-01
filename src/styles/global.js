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
  }
  
  .gatsby-image-wrapper {
    display: flex;
    flex: 1 0 25%;
    width: 100%;
  }
  
  ul {
    line-height: 1.45;
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
  
  @-webkit-keyframes ani {
    0 % {opacity: 0}
    5% {opacity: 1}
    90% {transform: scale(.9); opacity: 1}
    100% {transform: scale(1); opacity: 0}
  }

  @-webkit-keyframes blob-left-top-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(-100px, 0);
              transform: scale(0.9) translate(-100px, 0);
    }
    62% {
      -webkit-transform: scale(0.7) translate(-100px, -100px);
              transform: scale(0.7) translate(-100px, -100px);
    }
    94% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @keyframes blob-left-top-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(-100px, 0);
              transform: scale(0.9) translate(-100px, 0);
    }
    62% {
      -webkit-transform: scale(0.7) translate(-100px, -100px);
              transform: scale(0.7) translate(-100px, -100px);
    }
    94% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @-webkit-keyframes blob-right-top-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(100px, 0);
              transform: scale(0.9) translate(100px, 0);
    }
    64% {
      -webkit-transform: scale(0.7) translate(100px, -100px);
              transform: scale(0.7) translate(100px, -100px);
    }
    96% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @keyframes blob-right-top-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(100px, 0);
              transform: scale(0.9) translate(100px, 0);
    }
    64% {
      -webkit-transform: scale(0.7) translate(100px, -100px);
              transform: scale(0.7) translate(100px, -100px);
    }
    96% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @-webkit-keyframes blob-left-bottom-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(-100px, 0);
              transform: scale(0.9) translate(-100px, 0);
    }
    66% {
      -webkit-transform: scale(0.7) translate(-100px, 100px);
              transform: scale(0.7) translate(-100px, 100px);
    }
    98% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @keyframes blob-left-bottom-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(-100px, 0);
              transform: scale(0.9) translate(-100px, 0);
    }
    66% {
      -webkit-transform: scale(0.7) translate(-100px, 100px);
              transform: scale(0.7) translate(-100px, 100px);
    }
    98% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @-webkit-keyframes blob-right-bottom-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(100px, 0);
              transform: scale(0.9) translate(100px, 0);
    }
    68% {
      -webkit-transform: scale(0.7) translate(100px, 100px);
              transform: scale(0.7) translate(100px, 100px);
    }
    100% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
  
  @keyframes blob-right-bottom-anim {
    0% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
    33% {
      -webkit-transform: scale(0.9) translate(100px, 0);
              transform: scale(0.9) translate(100px, 0);
    }
    68% {
      -webkit-transform: scale(0.7) translate(100px, 100px);
              transform: scale(0.7) translate(100px, 100px);
    }
    100% {
      -webkit-transform: scale(1.1) translate(0, 0);
              transform: scale(1.1) translate(0, 0);
    }
  }
`
