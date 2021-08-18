import {
  RESET,
  SET_PERSONS_DATA,
  SET_PERSONS_IS_LOADING,
  SET_PERSONS_ERROR,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PERSONS_DATA:
    case SET_PERSONS_IS_LOADING:
    case SET_PERSONS_ERROR:
      return { ...state, ...payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
