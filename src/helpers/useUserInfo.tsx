import { useEffect, useState } from "react"

import { IUserInfo } from "types"
import { users } from "api/users"

export const useUserInfo = (login: string | undefined) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  useEffect(() => {
    if (!login) return
    const request = async () => {
      setUserInfo(await users.getUser(login))
    }

    request()
  }, [login])

  return userInfo
}
