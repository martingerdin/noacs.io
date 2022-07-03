import { MetaTags } from '@redwoodjs/web'
import ProjectCell from "src/components/ProjectCell"

interface Props {
  id: string
}

const ProjectPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Project" description="Project page" />

      <ProjectCell id={id} />
    </>
  )
}

export default ProjectPage
