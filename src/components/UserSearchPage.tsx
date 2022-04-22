import React, { InputHTMLAttributes } from "react";

import { IGitHubUser } from "types";

import { List } from "./List";
import { UserItem } from "./UserItem";

import s from "styles/UserSearchPage.module.scss"

export const UserSearchPage: React.FC<{
  inputControlProps: InputHTMLAttributes<HTMLInputElement>,
  userList: IGitHubUser[]
}> = ({ inputControlProps, userList }) => {

  return (
    <div id={s.wrapper}>
      <h2>Github Searcher</h2>
      <input
        placeholder="Search for users"
        {...inputControlProps}
      />
      <List
        data={userList}
        renderComponent={(user: IGitHubUser) => (
          <UserItem user={user} key={user.id} />
        )}
      />
    </div>
  )
}
