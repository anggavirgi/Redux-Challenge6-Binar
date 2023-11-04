import { detailRedux } from "../../services/GetDetails";
import { setDetail, setId } from "../reducers/movie/detailReducer";

export const getDetailMovie = (input) => (dispatch) => {
  return detailRedux(input)
    .then((result) => {
      dispatch(setDetail(result.data.data));
      dispatch(setId(result.data.data.id));
    })
    .catch((err) => {
      // throw err;
    });
};
