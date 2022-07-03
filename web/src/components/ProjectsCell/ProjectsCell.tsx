import type { ProjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from "@redwoodjs/router"


export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      title
      aim
      design
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
<div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ projects }: CellSuccessProps<ProjectsQuery>) => {
  return (
    <div>
	<h2>Projects</h2>
	{projects.map((item) => {
	  const {id, title, aim, design} = item
	  return (
	    <article key={id}>
		<header>
		    <h3>
			<Link to={routes.project({ id: id })}>{title}</Link>
		    </h3>
		</header>
		<h4>Aim</h4>
		<p>{aim}</p>
		<h4>Design</h4>
		<p>{design}</p>
	    </article>
	  )
	})}
    </div>
  )
}
