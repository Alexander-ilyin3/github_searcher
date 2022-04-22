import React from "react"

import { IUserRepository } from "types"
import s from "styles/RepositoryItem.module.scss"

export const RepositoryItem: React.FC<{ userRepository: IUserRepository }> = ({ userRepository }) => {
  return (
    <li className={s.item_wrapper}>
      <a href={userRepository.html_url} className={`${s.link}`} target="_blank">
        <span className={s.repo_name}>{userRepository.name}</span>
        <div className={s.details_wrapper}>
          <span>{userRepository.forks_count} Forks</span>
          <span>{userRepository.stargazers_count} Stars</span>
        </div>
      </a>
    </li>
  )
}
