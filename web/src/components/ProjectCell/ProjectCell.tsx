import type { FindProjectQuery, FindProjectQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProjectQuery($id: String!) {
    project: project(id: $id) {
      id
      title
      aim
      design
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindProjectQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  project,
}: CellSuccessProps<FindProjectQuery, FindProjectQueryVariables>) => {
  const { title, aim, design } = project
  return (
    <div>
	<h2>{title}</h2>
	<h3>Aim</h3>
	<p>{aim}</p>
	<h3>Design</h3>
	<p>{design}</p>
    </div>
  )
}
