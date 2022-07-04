import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProjectsCell from "src/components/ProjectsCell"

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ProjectsCell />
    </>
  )
}

export default HomePage
