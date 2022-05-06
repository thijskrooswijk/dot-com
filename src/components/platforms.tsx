import * as React from "react"

import { PlatformsModel } from "../data/models"
import { StyleObject } from "../lib/css-types"
import { A, Img, Li, Ul } from "./elements"

export const platformsStyle: StyleObject = {
  display: "grid",
  gap: 12,
  gridAutoFlow: "column",
  justifyContent: "start",
  listStyleType: "none",
  padding: 0,
}

export const platformStyle: StyleObject = {
  height: 24,
  width: 24,
}

type PlatformsProps = {
  model: PlatformsModel[]
}

export const Platforms = ({ model }: PlatformsProps) => (
  <Ul css={platformsStyle}>{getPlatform(model)}</Ul>
)

const getPlatform = (model: PlatformsModel[]) =>
  model.map(platform => {
    const { url, icon, alt } = platform
    const uuid = React.useId()

    return (
      <Li key={uuid} css={platformStyle}>
        <A href={url}>
          <Img src={icon} width="24" height="24" alt={alt} />
        </A>
        {` `}
      </Li>
    )
  })
