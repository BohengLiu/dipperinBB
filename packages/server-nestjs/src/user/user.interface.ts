export interface UserData {
  username: string;
  email: string;
  token: string;
  bio: string;
  image?: string;
}

export interface UserRO {
  user: UserData;
}

export interface JWTPayload {
  id: number,
  username: string,
  email: string,
  exp: number,
  iat: number
}