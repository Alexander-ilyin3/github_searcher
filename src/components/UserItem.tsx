import React from "react"
import { useNavigate } from "react-router-dom"
import { IGitHubUser } from "types"

import { useFetchRepoCount } from "helpers/useFetchRepoCount"

import s from 'styles/UserItem.module.scss'

export const UserItem: React.FC<{ user: IGitHubUser }> = ({ user }) => {
  const repoCount = useFetchRepoCount(user.login)
  const navigate = useNavigate()

  return (
    <li onClick={() => navigate(`/user/${user.login}`)} className={s.list_item}>
      <div className={s.user_info}>
        <img src={user.avatar_url}></img>
        <span> {user.login} </span>
      </div>
      <span> {repoCount} </span>
    </li>
  )
}
