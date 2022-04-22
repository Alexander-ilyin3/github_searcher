import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IGitHubUser } from "types";
import { users } from "api/users";
import { useInputControlProps } from "helpers/useInputControlProps";
import { useInputSearch } from "helpers/useInputSearch";

import { UserDetailsPage } from "./UserDetailsPage";
import { UserSearchPage } from "./UserSearchPage";

export const Layout: React.FC = () => {
  const inputControlProps = useInputControlProps()

  const { response: userList } = useInputSearch<IGitHubUser>({
    inputValue: inputControlProps.value as string,
    requestFunc: users.getUsers,
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSearchPage inputControlProps={inputControlProps} userList={userList} />} />
        <Route path="user/:login" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
