import { User } from "./users.interfaces";

export interface UserResponse {
    message: string;
    data: User;
}

export interface UsersResponse {
  message: string;
  data: User[];
}