import { Link, routes } from "@redwoodjs/router"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    
    <>
	<header>
	    <h1>noacs - a virtual research lab</h1>
	    <nav>
		<ul>
		    <li><Link to={routes.home()}>Home</Link></li>
		</ul>
	    </nav>
	</header>
	<main>
	    {children}
	</main>
    </>
  )
}

export default MainLayout
