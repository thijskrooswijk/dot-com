import * as React from "react"
import { Image } from "./image"

export const ClockOdd: React.FC = () => (
  <React.Fragment>
    <Image image="angularRotate" reverse />
    <Image image="angular" />
    <Image image="angularRotate" reverse />
    <Image image="angular" />
  </React.Fragment>
)
