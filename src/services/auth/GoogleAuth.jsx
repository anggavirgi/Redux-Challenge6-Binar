import { httpbinar } from "../../utils/Http";
import { API_ENDPOINT } from "../../utils/api-endpoint";

const googleRedux = async(input) => {
  return await httpbinar.post(API_ENDPOINT.LOGIN_GOOGLE, input)
}

export {googleRedux };
