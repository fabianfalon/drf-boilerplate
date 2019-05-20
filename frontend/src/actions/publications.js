import { API_ENDPOINT } from '../dataSource';

import {
  PUBLICATIONS_FAILURE,
  PUBLICATIONS_SUCCESS,
  PUBLICATIONS_REQUEST
} from "./publication_types.js";

export const getPublications = () => ({
  payload: {
    request: {
      method: 'GET',
      url: API_ENDPOINT + '/publications/'
    }
  },
  types: [PUBLICATIONS_REQUEST, PUBLICATIONS_SUCCESS, PUBLICATIONS_FAILURE],
});
