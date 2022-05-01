import { capitalizeEveryWord } from "helpers";
import { IUserInfo } from "types";

class UserModel implements IUserInfo {
  email: string;
  location: string;
  followers: number | string;
  following: number | string;
  bio: string;
  avatar_url: string;
  _login: string;
  _created_at: string | number | Date;

  replaceIfEmpty = <T>(value: T, replacer: string) => {
    if (!value) {
      return replacer
    }
    return value
  }

  constructor(userObject: IUserInfo) {
    this._login = userObject.login
    this.avatar_url = userObject.avatar_url
    this.bio = this.replaceIfEmpty(userObject.bio, 'No bio')
    this.email = this.replaceIfEmpty(userObject.email, '<hidden>')
    this.location = this.replaceIfEmpty(userObject.location, '<hidden>')
    this._created_at = userObject.created_at
    this.followers = this.replaceIfEmpty(userObject.followers, 'No followers')
    this.following = this.replaceIfEmpty(userObject.following, 'No folowwing')
  }

  public get login(): string {
    return capitalizeEveryWord(this._login)
  }
  public set login(_) { }

  public get created_at(): string {
    return new Date(this._created_at || '').toLocaleDateString() || ''
  }
  public set created_at(_) { }
}

export class User extends UserModel { }
