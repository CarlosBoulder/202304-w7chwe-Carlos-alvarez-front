import usersMock from "../../mocks/usersMock";
import UsersStructure from "./types";
import { UserState, loadUsersActionCreator, usersReducer } from "./usersSlice";

describe("Given a usersReducer reducer", () => {
  describe("When it receives an empty users list and a loadUsers action with one user", () => {
    test("Then it should return a list with one user", () => {
      const currentUserState: UserState = {
        users: [],
      };

      const newUsers: UsersStructure[] = usersMock;

      const expectedUsersState: UserState = {
        users: newUsers,
      };

      const loadUsersAction = loadUsersActionCreator(newUsers);

      const newUsersState = usersReducer(currentUserState, loadUsersAction);

      expect(newUsersState).toStrictEqual(expectedUsersState);
    });
  });
});
