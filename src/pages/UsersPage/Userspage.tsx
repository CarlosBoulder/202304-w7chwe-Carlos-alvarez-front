import { useEffect } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadUsersActionCreator } from "../../store/users/usersSlice";
import useUsers from "../../hooks/useUsers/useUsers";

const UsersPage = (): JSX.Element => {
  const token = useAppSelector((store) => store.loginStore.token);

  const { getUsers } = useUsers(token);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const users = await getUsers();
      dispatch(loadUsersActionCreator(users.users));
    })();
  }, [dispatch, getUsers]);

  const usersList = useAppSelector((state) => state.userStore.users);

  return <UsersList users={usersList} />;
};

export default UsersPage;
