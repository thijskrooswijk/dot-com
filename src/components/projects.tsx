import { Li, Span, Ul } from '@wheelroom/any/react'
import { Fragment } from 'react'
import { contentModel } from '../data/content'
import { projectListItemStyle, projectListStyle } from '../theme/style'
import { Link } from './link'

interface ProjectsProps {
  model: contentModel['projects']
}

const ConditionalRendering = ({ model, ...rest }) => {
  return model.url ? <Link to={model.url} {...rest} /> : <Fragment {...rest} />
}

export const Projects = ({ model }: ProjectsProps) => {
  const projects = model
  const projectList = projects.map((project, index) => {
    return (
      <Li key={index} css={projectListItemStyle}>
        <ConditionalRendering model={project} title={project.client}>
          <Span>{project.client}</Span>
          {` `}
          {project.description}
        </ConditionalRendering>
      </Li>
    )
  })
  return <Ul css={projectListStyle}>{projectList}</Ul>
}
