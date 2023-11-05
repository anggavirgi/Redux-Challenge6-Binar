import { registerRedux } from "../../services/auth/RegisterUser";
import { setStatus, setToken, setUser } from "../reducers/auth/registerReducer";

export const postRegisterUser = (input) => (dispatch) => {
  return registerRedux(input)
    .then((result) => {
      dispatch(setToken(result.data.data.token));
      dispatch(setStatus("Register Berhasil!"));
      dispatch(setUser(input));
      return result;
    })
    .catch((err) => {
      throw err;
    });
};
