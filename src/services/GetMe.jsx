import { httpbinar } from "../utils/Http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const meRedux = async () => {
  return await httpbinar.get(API_ENDPOINT.GET_ME);
};

export { meRedux };
