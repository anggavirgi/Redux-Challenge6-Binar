import { searchRedux } from "../../services/GetSearch"
import { setKeyword, setSearch } from "../reducers/movie/searchReducer";

export const getMovieSearch = (input) => (dispatch) => {
  return searchRedux(input).then((result) => {
    dispatch(setSearch(result.data.data))
    dispatch(setKeyword(input.query))
  }).catch((err) => {
    
  });
}