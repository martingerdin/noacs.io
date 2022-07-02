export const schema = gql`
  type Project {
    id: Int!
    title: String!
    aim: String!
    design: String!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
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
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
