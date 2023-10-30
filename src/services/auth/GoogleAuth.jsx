import { useMutation } from "@tanstack/react-query";
import { httpbinar } from "../../utils/Http";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";

const fetchDataGoogle = async (input) => {
  return await httpbinar
    .post(API_ENDPOINT.LOGIN_GOOGLE, input)
    .then((result) => {
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token)
      window.location.href = "/home"
    })
    .catch((err) => {
      if (err.response.status === 400 || err.response.status === 401) {
        return err.response.data.message;
      }
    });
};

const useDataGoogle = () => {
  return useMutation(fetchDataGoogle);
};

export { fetchDataGoogle, useDataGoogle };
