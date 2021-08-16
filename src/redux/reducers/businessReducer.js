import { RESET } from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
