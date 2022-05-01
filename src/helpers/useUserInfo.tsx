import { useEffect, useState } from "react"

import { IUserInfo } from "types"
import { users } from "api/users"
import { User } from "models/UserModel"

export const useUserInfo = (login: string | undefined) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  useEffect(() => {
    if (!login) return
    const request = async () => {
      const response = await users.getUser(login)
      const newUser = new User(response)
      setUserInfo(newUser)
    }

    request()
  }, [login])

  return userInfo
}
