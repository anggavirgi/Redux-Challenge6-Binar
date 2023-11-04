import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/reducers/auth/loginReducer";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenRedux = useSelector((state) => state.auth);

  dispatch(setToken(CookieStorage.get(CookiesKeys.AuthToken)));
  if (!tokenRedux.token) {
    navigate("/");
  } else {
    return children;
  }
}

export default TokenProtected;
