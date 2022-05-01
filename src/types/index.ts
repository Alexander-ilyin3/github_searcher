export interface IGitHubUser {
  avatar_url: string
  login: string
  id: number
  repos_url: string
}

export interface IUserInfo {
  login: string;
  email: string;
  location: string;
  created_at: string;
  followers: number | string;
  following: number | string;
  bio: string;
  avatar_url: string;
}

export interface IUserRepository {
  stargazers_count: number;
  html_url: string;
  forks_count: number;
  name: string;
}
