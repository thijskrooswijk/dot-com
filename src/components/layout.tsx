import * as React from "react"
import { Global } from "@emotion/react"
import { globalStyle } from "../theme/global"
import { globalReset } from "../theme/global-reset"
import { GetTypesOf } from '../lib/get-types-of'

export const Layout: React.FC<GetTypesOf['div']> = props => (
  <React.Fragment>
    <Global styles={[globalReset, globalStyle]} />
    {props.children}
  </React.Fragment>
)
