import { API_ENDPOINT } from "../utils/api-endpoint";
import { httpbinar } from "../utils/Http";

const dataPopularRedux = async (input) => {  
  return await httpbinar.get(API_ENDPOINT.GET_POPULAR, {params: input});
};

export { dataPopularRedux };
