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
  
  .ring:nth-child(2) {animation-delay: -1s}
  .ring:nth-child(3) {animation-delay: -2s}
  .ring:nth-child(4) {animation-delay: -3s}
  .ring:nth-child(5) {animation-delay: -4s}
  .ring:nth-child(6) {animation-delay: -5s}
  
  .blobs {
    filter: url("#goo");
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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
  .blob {
    position: absolute;
    background: white;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    top: 50%;
    width: 100px;
    height: 100px;
    color: white;
    border-radius: 50%;
    -webkit-animation: blob-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite;
            animation: blob-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite;
  }
  .blob:nth-child(2) {
    -webkit-animation-name: blob-right-top-anim;
            animation-name: blob-right-top-anim;
  }
  .blob:nth-child(3) {
    -webkit-animation-name: blob-left-bottom-anim;
            animation-name: blob-left-bottom-anim;
  }
  .blob:nth-child(4) {
    -webkit-animation-name: blob-right-bottom-anim;
            animation-name: blob-right-bottom-anim;
  }
`
