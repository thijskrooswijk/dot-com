import * as React from "react"

import { ClientsModel } from "../data/models"
import { StyleObject } from "../lib/css-types"
import { Li, Ul } from "./elements"

export const clientsStyle: StyleObject = {
  listStyleType: "none",
  marginBottom: "2em",
  padding: 0,
}

export const companyStyle: StyleObject = {
  display: "inline-flex",
  color: `var(--list-color)`,
  fontWeight: 300,
  ":after": {
    content: "'\\00a0—\\00a0'",
    opacity: 0.5,
  },
  ":last-child:after": {
    content: "''",
  },
}

interface ClientsProps {
  model: ClientsModel[]
}

export const Clients = ({ model }: ClientsProps) => (
  <Ul css={clientsStyle}>{getClient(model)}</Ul>
)

const getClient = (model: ClientsModel[]) =>
  model.map(company => {
    const uuid = React.useId()

    return (
      <Li key={uuid} css={companyStyle}>
        <>{company}</>
      </Li>
    )
  })
