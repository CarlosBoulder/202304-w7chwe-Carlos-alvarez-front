import { render, screen } from "@testing-library/react";
import UsersStructure from "../../store/users/types";
import UserCard from "./UsersCard";

describe("Given a userCard component", () => {
  describe("When it's rendered with 'Carlos' name", () => {
    test("Then it should show 'Carlos' in a heading", () => {
      const usersMock: UsersStructure = {
        _id: "",
        name: "Carlos",
        password: "",
        picture: "",
        username: "",
        description: "",
      };
      render(<UserCard user={usersMock} />);

      const heading = screen.getByRole("heading", {
        name: usersMock.name,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
