import * as React from "react"
import { GetTypesOf } from "../lib/get-types-of"

export const Box: React.FC<GetTypesOf["div"]> = (props) => <div {...props} />
