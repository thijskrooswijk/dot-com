import { Li, Span, Ul } from '@wheelroom/any/react'
import { Fragment } from 'react'
import { contentModel } from '../data/content'
import { StyleObject } from '../lib/css-types'
import { Link } from './link'

export const projectListStyle: StyleObject = {
  lineHeight: 1.675,
  marginBottom: '2em',
  paddingLeft: '1.25em',
}

export const projectListItemStyle: StyleObject = {
  marginBottom: 2,
}

export const clientStyle: StyleObject = {
  fontWeight: 'bold',
}

interface ProjectsProps {
  model: contentModel['projects']
}

interface ConditionalProps {
  children: React.ReactNode
  model: {
    client?: string
    url?: string
  }
}

const ConditionalRendering = ({ model, ...rest }: ConditionalProps) => {
  return model.url ? (
    <Link to={model.url} title={model.client} {...rest} />
  ) : (
    <Fragment {...rest} />
  )
}

export const Projects = ({ model }: ProjectsProps) => {
  const projects = model
  const projectList = projects.map((project, index) => {
    return (
      <Li key={index} css={projectListItemStyle}>
        <ConditionalRendering model={project}>
          <Span css={clientStyle}>{project.client}</Span>
          {` `}
          {project.description}
        </ConditionalRendering>
      </Li>
    )
  })
  return <Ul css={projectListStyle}>{projectList}</Ul>
}
