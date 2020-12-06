import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { User } from "./types.ts";
import { userWhithStatusActive } from "./filterActiveUser.ts";

const activeUsers: User[] = [
  { name: "Budi", status: "active" },
  { name: "Ani", status: "active" },
];
const inactiveUsers: User[] = [
  { name: "Bambang", status: "inactive" },
  { name: "Susi", status: "inactive" },
];

Deno.test(
  "userWhithStatusActive - test case #1 - will only return user with status active",
  () => {
    const result = userWhithStatusActive([...activeUsers, ...inactiveUsers]);
    assertEquals(result, activeUsers);
  }
);

Deno.test(
  "userWhithStatusActive - test case #2 - will return empty array when user with status active not found",
  () => {
    const result = userWhithStatusActive([...inactiveUsers]);
    assertEquals(result, []);
  }
);
