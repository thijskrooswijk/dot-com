import * as React from "react"
import { Image } from "./image"

export const ClockEven = () => (
  <React.Fragment>
    <Image image="flipAngularRotate" />
    <Image image="flipAngular" reverse />
    <Image image="flipAngularRotate" />
    <Image image="flipAngular" reverse />
  </React.Fragment>
)
