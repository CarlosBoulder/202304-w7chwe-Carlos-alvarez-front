import axios from "axios";
import { useCallback } from "react";
import { UsersStateStructure } from "./types";

const apiUrl = import.meta.env.VITE_API_URL;

const useUsers = (token: string) => {
  const getUsers = useCallback(async (): Promise<UsersStateStructure> => {
    const { data: users } = await axios.get(`${apiUrl}users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return users;
  }, [token]);

  return { getUsers };
};

export default useUsers;
