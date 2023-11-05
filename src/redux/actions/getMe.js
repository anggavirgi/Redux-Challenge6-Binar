import { meRedux } from "../../services/GetMe"
import { setEmail, setName } from "../reducers/auth/meReducer";

export const getDataMe = () => (dispatch) => {
  return meRedux().then((result) => {
    dispatch(setName(result.data.data.name))
    dispatch(setEmail(result.data.data.email))
  }).catch((err) => {
    throw err
  });
}