import { useEffect, useState } from "react"

import { repos } from "api/repos"

export const useFetchRepoCount = (login: string): string => {
  const [reposNumber, setReposNumber] = useState('Loading...')
  useEffect(() => {
    const request = async () => {
      const responceObject = await repos.getRepos(login)
      setReposNumber(responceObject?.data?.user?.repositories?.totalCount + '' || '')
    }
    request()
  }, [login])

  return reposNumber
}
