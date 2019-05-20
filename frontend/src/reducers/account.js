import {
    INVALIDATE_TOKEN,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT,
    TOKEN_REQUEST, TOKEN_SUCCESS,TOKEN_FAILURE,
   } from '../actions/accounts_types';

  const initial_state = {
    didInvalidate: false,
    error: undefined,
    isAuthenticated: false,
    isFetching: false,
    token: undefined,
    username: undefined,
    user: {}
  };

  const account = (state = initial_state, action) => {
    switch (action.type) {
      case INVALIDATE_TOKEN:
        return {
          ...state,
          didInvalidate: true
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.error.data,
          isFetching: false
        };
      case LOGIN_REQUEST:
        return {
          ...state,
          didInvalidate: false,
          error: undefined,
          isFetching: true,
          username: action.username
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          isFetching: false,
          user: action.payload.data.user,
          token: action.payload.data.access_token
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          token: undefined
        };
      case TOKEN_REQUEST:
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.data.token
        }
      case TOKEN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.data.token
        }
      case TOKEN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          token: action.payload.data.token
        }
      default:
        return state;
    }
  };

  export default account;
