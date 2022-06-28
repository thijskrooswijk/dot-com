import * as React from "react"
import { GetTypesOf } from "../lib/get-types-of"
import { Any } from "../lib/react-create-any-element"

export const Section: React.FC<GetTypesOf["section"]> = props => (
  <Any is="section" css={{ padding: 4 }} {...props}>
    {props.children}
  </Any>
)

export const Img: React.FC<GetTypesOf["img"]> = props => (
  <Any is="img" {...props}>
    {props.children}
  </Any>
)

export const Ol: React.FC<GetTypesOf["ol"]> = props => (
  <Any is="ol" {...props}>
    {props.children}
  </Any>
)

export const Ul: React.FC<GetTypesOf["ul"]> = props => (
  <Any is="ul" {...props}>
    {props.children}
  </Any>
)

export const Li: React.FC<GetTypesOf["li"]> = props => (
  <Any is="li" {...props}>
    {props.children}
  </Any>
)

export const A: React.FC<GetTypesOf["a"]> = props => (
  <Any is="a" {...props}>
    {props.children}
  </Any>
)

export const B: React.FC<GetTypesOf["b"]> = props => (
  <Any is="b" {...props}>
    {props.children}
  </Any>
)
