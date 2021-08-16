import { css } from '@emotion/react'

export const dropletStyle = css(`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: transparent;
  border: 2px white solid;
  animation: ani infinite linear 6s;
  transform: scale(0.01);
  left: 0;
  top: 0;
  :nth-child(2) {animation-delay: -1s}
  :nth-child(3) {animation-delay: -2s}
  :nth-child(4) {animation-delay: -3s}
  :nth-child(5) {animation-delay: -4s}
  :nth-child(6) {animation-delay: -5s}
`)

export const blobsStyle = css(`
  filter: url("#goo");
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 150%;
`)

export const blobStyle = css(`
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
  :nth-child(2) {
    -webkit-animation-name: blob-right-top-anim;
            animation-name: blob-right-top-anim;
  }
  :nth-child(3) {
    -webkit-animation-name: blob-left-bottom-anim;
            animation-name: blob-left-bottom-anim;
  }
  :nth-child(4) {
    -webkit-animation-name: blob-right-bottom-anim;
            animation-name: blob-right-bottom-anim;
`)