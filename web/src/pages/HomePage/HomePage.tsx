import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProjectsCell from "src/components/ProjectsCell"

const HomePage = () => {
  return (
    <>
      <MetaTags title="No Accidents Research Lab" description="Home page" />
      <ProjectsCell />
    </>
  )
}

export default HomePage
