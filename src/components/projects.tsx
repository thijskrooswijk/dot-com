import { A, Li, Span, Ul } from '@wheelroom/any/react'
import { contentModel } from '../data/content'
import { linkStyle, projectListItemStyle, projectListStyle } from '../theme/style'

interface ProjectsProps {
  model: contentModel['projects']
}

export const Projects = ({ model }: ProjectsProps) => {
  const projects = model
  const projectList = projects.map((project, index) => (
    <Li key={index} css={projectListItemStyle}>
      <A href={project.url} css={linkStyle}>
        <Span>{project.client}</Span>
        {` `}
        {project.description}
      </A>
    </Li>
  ))
  return <Ul css={projectListStyle}>{projectList}</Ul>
}
