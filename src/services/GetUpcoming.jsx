import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { http } from "../utils/Http";

const fetchDataUpcoming = async () => {
  const { data } = await http.get(API_ENDPOINT.GET_UPCOMING);
  return data;
};

const useDataQueryUpcoming = () => {
  return useQuery([API_ENDPOINT.GET_UPCOMING], fetchDataUpcoming);
};

export { fetchDataUpcoming, useDataQueryUpcoming };
