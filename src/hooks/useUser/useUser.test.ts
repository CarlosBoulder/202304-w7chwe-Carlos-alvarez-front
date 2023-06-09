import { renderHook } from "@testing-library/react";
import useUser, { UserCredentials } from "./useUser";

describe("Given a useUser custom hook", () => {
  describe("When calls getToken function with a valid username and password", () => {
    test("Then it should return a user token", async () => {
      const mockUserCredentials: UserCredentials = {
        username: "Carlos",
        password: "Carlos",
      };

      const tokenMock = "rsdtfvgbhnjmkl";

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useUser(mockUserCredentials));

      const token = await getToken();

      expect(token).toBe(tokenMock);
    });
  });
});
