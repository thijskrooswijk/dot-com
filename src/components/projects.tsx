import { A, Li, Span, Ul } from '@wheelroom/any/react'
import { Fragment } from 'react'
import { contentModel } from '../data/content'
import {
  linkStyle,
  projectListItemStyle,
  projectListStyle
} from '../theme/style'

interface ProjectsProps {
  model: contentModel['projects']
}

const Abstract = ({ model }) => {
  return (
    <>
      <Span>{model.client}</Span>
      {` `}
      {model.description}
    </>
  )
}

const ConditionalRendering = ({ model, ...props }) => {
  return model.url ? (
    <A href={model.url} css={linkStyle}>
      {props.children}
    </A>
  ) : (
    <Fragment {...props} />
  )
}
export const Projects = ({ model }: ProjectsProps) => {
  const projects = model
  const projectList = projects.map((project, index) => {
    return (
      <Li key={index} css={projectListItemStyle}>
        <ConditionalRendering model={project}>
          <Abstract model={project} />
        </ConditionalRendering>
      </Li>
    )
  })
  return <Ul css={projectListStyle}>{projectList}</Ul>
}
