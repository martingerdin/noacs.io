import { Link, routes } from "@redwoodjs/router"
import { useAuth } from "@redwoodjs/auth"

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log(currentUser)
  return (
    
    <>
	<header>
	    <h1>noacs - a virtual research lab</h1>
	    {isAuthenticated && <p>Signed in as {currentUser.email}</p>}
	    <nav>
		<ul>
		    <li><Link to={routes.home()}>Home</Link></li>
		    {isAuthenticated
		    ? <li><Link to={routes.home()} onClick={logOut}>Sign out</Link></li>
		    : <li><Link to={routes.login()}>Sign in</Link></li>
		    }
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
