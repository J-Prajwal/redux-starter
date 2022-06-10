import {
  GET_FEEDS_ERROR,
  GET_FEEDS_LOADING,
  GET_FEEDS_SUCCESS,
} from "./feed.types";

const initialState = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FEEDS_ERROR: {
      return {
        ...state,
        getFeeds: { ...state.getFeeds, loading: false, error: true },
      };
    }
    case GET_FEEDS_LOADING: {
      return {
        ...state,
        getFeeds: { ...state.getFeeds, loading: true, error: false },
      };
    }
    case GET_FEEDS_SUCCESS: {
      return {
        ...state,
        getFeeds: { ...state.getFeeds, loading: false, error: false },
        data: payload
      };
    }
    default: {
      return state;
    }
  }
};
