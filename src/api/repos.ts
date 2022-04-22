import { graphQlInstance as instance } from './instance'

export const repos = {
  getRepos: (login: string) => {

    const graphqlQuery = {
      "query": `query {
        user(login: "${login}") {
          repositories {
            totalCount
          }
        }
      }`,
      "variables": {}
    };

    return (
      instance
        .post('', graphqlQuery)
        .then(res => {
          return res?.data
        })
    )
  },
  getAllUserRepos: (login: string) => {

    const graphqlQuery = {
      "query": `query {
        user(login: ${login}) {
          repositories (first: 10, orderBy: {field: NAME, direction: ASC}) { nodes { name url stargazerCount forkCount } }
        }
      }`,
      "variables": {}
    };

    return (
      instance
        .post('', graphqlQuery)
        .then(res => {
          return res?.data
        })
    )
  }
}
