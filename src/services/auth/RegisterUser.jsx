import { API_ENDPOINT } from "../../utils/api-endpoint";
import { httpbinar } from "../../utils/Http";

const registerRedux = async (input) => {
  return await httpbinar.post(API_ENDPOINT.REGISTER_USER, input)
}

// const fetchRegister = async (input) => {
//   return await httpbinar
//     .post(API_ENDPOINT.REGISTER_USER, input)
//     .then((result) => {
//       CookieStorage.set(CookiesKeys.RegisterToken, result.data.data.token);
//       window.location.href = "/login";
//     })
//     .catch((err) => {
//       if (err.response.status === 400 || err.response.status === 401) {
//         return err.response.data.message;
//       }
//     });
// };

// const useRegister = () => {
//   return useMutation(fetchRegister);
// };

export { registerRedux };
