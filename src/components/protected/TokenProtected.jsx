import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/reducers/auth/loginReducer";
import { setTokenGoogle } from "../../redux/reducers/auth/googleReducer";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenRedux = useSelector((state) => state.auth);
  const tokenGoogleRedux = useSelector((state) => state.authGoogle);

  dispatch(setToken(CookieStorage.get(CookiesKeys.AuthToken)));
  dispatch(setTokenGoogle(CookieStorage.get(CookiesKeys.AuthToken)));
  if (!tokenRedux.token && !tokenGoogleRedux.token) {
    navigate("/");
  } else {
    return children;
  }
}

export default TokenProtected;
