import { User } from "./types.ts";

export const userWhithStatusActive = (users: User[]): User[] =>
  users.filter((user) => user.status === "active");
