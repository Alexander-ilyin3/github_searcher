import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IUserRepository } from "types";
import { useInputControlProps } from "helpers/useInputControlProps";
import { useInputSearch } from "helpers/useInputSearch";
import { useUserInfo } from "helpers/useUserInfo";
import { users } from "api/users";

import { List } from "./List";
import { RepositoryItem } from "./RepositoryItem";

import s from "styles/UserDetailsPage.module.scss";

export const UserDetailsPage: React.FC = () => {
  const { login } = useParams()
  const userInfo = useUserInfo(login)
  const inputProps = useInputControlProps()
  const navigate = useNavigate()

  const { response: userRepositories = [] }: { response: IUserRepository[] } = useInputSearch({
    inputValue: `${inputProps.value} in:name user:${login}`,
    requestFunc: users.getUserRepos
  })

  if (!userInfo) return <h1>Loading...</h1>

  const backHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }

  return (
    <div id={s.wrapper}>
      <button onClick={backHandle}>{'<'}- Back</button>
      <div className={s.summary_wrapper} >
        <img src={userInfo?.avatar_url} id={s.avatar}></img>
        <div id={s.user_summary}>
          <p>User Name: {userInfo.login}</p>
          <p>Email: {userInfo.email}</p>
          <p>Location: {userInfo.location}</p>
          <p>Join date: {new Date(userInfo.created_at)?.toLocaleDateString()}</p>
          <p>Followers: {userInfo.followers}</p>
          <p>Following: {userInfo.following}</p>
        </div>
      </div>
      <div className={s.user_bio}>{userInfo.bio}</div>
      <input
        placeholder="Search for user repositories"
        {...inputProps}
      ></input>
      <List data={userRepositories} renderComponent={(item) => (
        <RepositoryItem userRepository={item} key={item.name} />
      )}
      />
    </div>
  )
}
