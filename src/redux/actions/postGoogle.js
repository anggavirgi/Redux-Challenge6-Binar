import { googleRedux } from "../../services/auth/GoogleAuth";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { setStatus, setTokenGoogle } from "../reducers/auth/googleReducer";

export const postAuthGoogle = (input) => (dispatch) => {
  return googleRedux(input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.GoogleCredentials, input.access_token);
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setTokenGoogle(result.data.data.token));
      dispatch(setStatus("Login Google Berhasil !"));
      return result;
    })
    .catch((err) => {
      throw err;
    });
};
