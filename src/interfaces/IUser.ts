import { IParagraph } from "./IParagraph";

export interface IUser {
  _id: string,
  name: string,
  email: string,
  password: string,
  paragraphs?: IParagraph[],
  createdAt?: Date;
  updatedAt?: Date;
}

export type IAuthUser = Omit<IUser, 'password' | 'paragraphs' | 'createdAt' | 'updatedAt'>
export type ILoginUser = Omit<IUser, '_id' | 'name' | 'paragraphs' | 'createdAt' | 'updatedAt'>
export type IRegisterUser = Omit<IUser, '_id' | 'paragraphs' | 'createdAt' | 'updatedAt'>