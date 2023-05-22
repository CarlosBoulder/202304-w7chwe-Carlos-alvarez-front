import { loginActionCreator, loginReducer } from "./userSlice";
import { TokenStateStructure } from "./userSlice";

describe("Given a loginReducer reducer", () => {
  describe("When it receives an empty initial state", () => {
    test("Then it should return a new state wit id and token", () => {
      const initialState: TokenStateStructure = {
        id: "",
        token: "",
      };

      const newState: TokenStateStructure = {
        id: "testId",
        token: "testToken",
      };

      const expectedLoginState: TokenStateStructure = {
        id: newState.id,
        token: newState.token,
      };

      const loadLoginAction = loginActionCreator(newState);

      const newLoginState = loginReducer(initialState, loadLoginAction);

      expect(newLoginState).toStrictEqual(expectedLoginState);
    });
  });
});
