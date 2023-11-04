import { loginRedux } from "../../services/auth/LoginUser";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { setLoggedIn, setToken, setUser } from "../reducers/auth/loginReducer";

export const postLoginUser = (input) => (dispatch) => {
  return loginRedux(input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setLoggedIn("true"));
      dispatch(setUser(input));
      return result;
    })
    .catch((err) => {
      throw err;
    });
};
