import { StyleObject } from "../lib/css-types"
import { GetTypesOf } from "../lib/get-types-of"

const templateStyle: StyleObject = {
  width: "100%",
  margin: "auto",
  maxWidth: 1440,
}

export const Template: React.FC<GetTypesOf["div"]> = ({
  children,
  ...props
}) => (
  <div css={templateStyle} {...props}>
    {children}
  </div>
)
