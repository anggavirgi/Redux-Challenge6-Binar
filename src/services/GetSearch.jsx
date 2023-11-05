import { API_ENDPOINT } from "../utils/api-endpoint";
import { httpbinar } from "../utils/Http";

const searchRedux = async(input) => {
  return await httpbinar.get(API_ENDPOINT.GET_SEARCH, {params: input})
}

export { searchRedux };
