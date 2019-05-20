import {
  PUBLICATIONS_FAILURE,
  PUBLICATIONS_SUCCESS,
  PUBLICATIONS_REQUEST
 } from "../actions/publication_types.js";

const initialState = {
  publications: [],
  isFetching: false,
  error: null
};

const publications = (state = initialState, action) => {
  switch (action.type) {
    case PUBLICATIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case PUBLICATIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };
    case PUBLICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        publications: action.payload.data.results,
      };
    default:
      return state;
  }
}

export default publications;
