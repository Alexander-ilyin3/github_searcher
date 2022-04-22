import { instance } from './instance'

export const users = {
  getUsers: (data: any) => {
    return (
      instance
        .get('search/users', { params: { ...data } })
        .then(res => res?.data)
    )
  },
  getUser: (userName: string) => {
    return (
      instance
        .get(`users/${userName}`)
        .then(res => res?.data)
    )
  },
  getUserRepos: (data: any) => {
    return (
      instance
        .get(`search/repositories`, { params: { ...data } })
        .then(res => res?.data)
    )
  }
}
