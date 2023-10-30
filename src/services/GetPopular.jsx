import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { httpbinar } from "../utils/Http";

const fetchDataPopular = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await httpbinar.get(_key, { params: _params });
  return data;
};

const useDataQueryPopular = (options) => {
  return useQuery([API_ENDPOINT.GET_POPULAR, options], fetchDataPopular);
};

export { fetchDataPopular, useDataQueryPopular };
