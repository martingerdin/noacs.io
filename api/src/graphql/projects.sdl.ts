export const schema = gql`
  type Project {
    id: String!
    title: String!
    aim: String!
    design: String!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: String!): Project @requireAuth
  }

  input CreateProjectInput {
    id: String!
    title: String!
    aim: String!
    design: String!
  }

  input UpdateProjectInput {
    title: String
    aim: String
    design: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: String!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: String!): Project! @requireAuth
  }
`
