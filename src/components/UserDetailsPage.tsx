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
  const { login: loginInParams } = useParams()
  const userInfo = useUserInfo(loginInParams)
  const inputProps = useInputControlProps()
  const navigate = useNavigate()

  const { response: userRepositories = [] }: { response: IUserRepository[] } = useInputSearch({
    inputValue: `${inputProps.value} in:name user:${loginInParams}`,
    requestFunc: users.getUserRepos
  })

  if (!userInfo) return <h1>Loading...</h1>

  const { avatar_url, bio, created_at, email, followers, following, location, login } = userInfo

  const backHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/')
  }

  return (
    <div id={s.wrapper}>
      <button onClick={backHandle}>{'<'}- Back</button>
      <div className={s.summary_wrapper} >
        <img src={avatar_url} id={s.avatar}></img>
        <div id={s.user_summary}>
          <p>User Name: {login}</p>
          <p>Email: {email}</p>
          <p>Location: {location}</p>
          <p>Join date: {created_at}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
      <div className={s.user_bio}>{bio}</div>
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
