import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { http } from "../utils/Http";

const fetchDataNowPlaying = async ({ queryKey }) => {
  const [_key, _params] = queryKey;

  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataQueryNowPlaying = (options) => {
  return useQuery([API_ENDPOINT.GET_NOW_PLAYING, options], fetchDataNowPlaying);
};

export { fetchDataNowPlaying, useDataQueryNowPlaying };
