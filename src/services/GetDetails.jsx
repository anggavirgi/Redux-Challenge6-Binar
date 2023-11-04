import { API_ENDPOINT } from "../utils/api-endpoint";
import { httpbinar } from "../utils/Http";

const detailRedux = async (input) => {
  return await httpbinar.get(API_ENDPOINT.GET_DETAILS + input.id)
}
// const fetchDataDetails = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;

//   const { data } = await httpbinar.get(_key + _params.movie_id );
//   return data;
// };

// const useDataQueryDetails = (options) => {
//   return useQuery([API_ENDPOINT.GET_DETAILS, options], fetchDataDetails);
// };

export { detailRedux };
