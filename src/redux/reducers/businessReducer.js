import {
  RESET,
  SET_BUSINESS_DATA,
  SET_BUSINESS_IS_LOADING,
  SET_BUSINESS_ERROR,
  SET_BUSINESS_SELECTED,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  selected: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BUSINESS_DATA:
    case SET_BUSINESS_IS_LOADING:
    case SET_BUSINESS_ERROR:
    case SET_BUSINESS_SELECTED:
      return { ...state, ...payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
