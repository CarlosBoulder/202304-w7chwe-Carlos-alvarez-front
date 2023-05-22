import UsersStructure from "../../store/users/types";
import UserCard from "../UsersCard/UsersCard";

interface UsersListProps {
  users: UsersStructure[];
}

const UsersList = ({ users }: UsersListProps): JSX.Element => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user._id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
