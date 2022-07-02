import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProjectsCell from "src/components/ProjectsCell"

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>noacs</h1>
      <p>
          A Virtual Research Lab
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <div>
	  <ProjectsCell />
      </div>
    </>
  )
}

export default HomePage
