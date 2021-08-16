import {
  SET_BUSINESS_DATA,
  SET_BUSINESS_IS_LOADING,
  SET_BUSINESS_ERROR,
} from "./actionTypes";
import { getServerClient } from "../../utils/networkUtils";

export const setBusinessData = (data) => ({
  type: SET_BUSINESS_DATA,
  payload: { data },
});

export const setBusinessIsLoading = (isLoading) => ({
  type: SET_BUSINESS_IS_LOADING,
  payload: { isLoading },
});

export const setBusinessError = (error) => ({
  type: SET_BUSINESS_ERROR,
  payload: { error },
});

export const fetchBusiness = () => (dispatch) => {
  dispatch(setBusinessIsLoading(true));

  getServerClient()
    .get("/business")
    .then((response) => {
      dispatch(setBusinessData(response.data));
    })
    .catch(setBusinessError);
};
