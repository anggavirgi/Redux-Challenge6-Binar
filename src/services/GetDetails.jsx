import { API_ENDPOINT } from "../utils/api-endpoint";
import { httpbinar } from "../utils/Http";

const detailRedux = async (input) => {
  return await httpbinar.get(API_ENDPOINT.GET_DETAILS + input.id)
}

export { detailRedux };
