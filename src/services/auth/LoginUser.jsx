import { httpbinar } from "../../utils/Http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const loginRedux = async (input) => {
  return await httpbinar.post(API_ENDPOINT.LOGIN_USER , input)
}

export { loginRedux };
