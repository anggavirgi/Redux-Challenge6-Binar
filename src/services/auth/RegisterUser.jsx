import { API_ENDPOINT } from "../../utils/api-endpoint";
import { httpbinar } from "../../utils/Http";

const registerRedux = async (input) => {
  return await httpbinar.post(API_ENDPOINT.REGISTER_USER, input)
}

export { registerRedux };
