import { dataPopularRedux } from "../../services/GetPopular";
import { setPage, setPopular } from "../reducers/movie/popularReducer";

export const getMoviePopular = (input) => (dispatch) => {
  return dataPopularRedux(input)
    .then((result) => {
      dispatch(setPopular(result.data.data));
      dispatch(setPage(result.data.page));
    })
    .catch((err) => {
      throw err;
    });
};
