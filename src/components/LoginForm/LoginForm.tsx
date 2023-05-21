import jwt_decode from "jwt-decode";
import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginActionCreator } from "../../store/user/loginSlice";

interface UserCredentials {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const { getToken } = useUser(userCredentials);

  const isValidForm = () => {
    return userCredentials.username !== "" && userCredentials.password !== "";
  };

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const obtainedToken = await getToken();

    if (obtainedToken) {
      const decodedToken: { sub: string; name: string } =
        jwt_decode(obtainedToken);

      const tokenInfo = {
        id: decodedToken.sub,
        token: obtainedToken,
      };

      dispatch(loginActionCreator(tokenInfo));
    }
  };

  return (
    <form className="form-container" autoComplete="off" onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          id="username"
          onChange={onChangeUserData}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={onChangeUserData}
          id="password"
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          disabled={!isValidForm}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
