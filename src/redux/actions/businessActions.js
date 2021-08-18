import {
  SET_BUSINESS_DATA,
  SET_BUSINESS_IS_LOADING,
  SET_BUSINESS_ERROR,
  SET_BUSINESS_SELECTED,
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

export const setBusinessSelected = (selected) => ({
  type: SET_BUSINESS_SELECTED,
  payload: { selected },
});

export const fetchBusiness = () => (dispatch) => {
  dispatch(setBusinessIsLoading(true));

  getServerClient()
    .get("/business")
    .then((response) => {
      dispatch(setBusinessData(response.data.businesses));
    })
    .catch((error) => dispatch(setBusinessError(error)))
    .then(() => dispatch(setBusinessIsLoading(false)));
};

export const createBusiness = (name) => (dispatch) => {
  dispatch(setBusinessIsLoading(true));

  getServerClient()
    .post("/business", { name })
    .then(() => {
      dispatch(fetchBusiness());
    })
    .catch((error) => dispatch(setBusinessError(error)))
    .then(() => dispatch(setBusinessIsLoading(false)));
};

export const deleteBusiness = (businessId) => (dispatch) => {
  dispatch(setBusinessIsLoading(true));

  getServerClient()
    .delete(`/business/${businessId}`)
    .then(() => {
      dispatch(fetchBusiness());
    })
    .catch((error) => dispatch(setBusinessError(error)))
    .then(() => dispatch(setBusinessIsLoading(false)));
};

export const editBusiness = (name, businessId) => (dispatch) => {
  dispatch(setBusinessIsLoading(true));

  getServerClient()
    .put(`/business/${businessId}`, { name })
    .then(() => {
      dispatch(fetchBusiness());
    })
    .catch((error) => dispatch(setBusinessError(error)))
    .then(() => dispatch(setBusinessIsLoading(false)));
};

export const getBusiness = (businessId) => (dispatch) => {
  dispatch(setBusinessIsLoading(true));

  getServerClient()
    .get(`/business/${businessId}`)
    .then((response) => {
      dispatch(setBusinessSelected(response.data));
    })
    .catch((error) => {
      dispatch(setBusinessSelected(null));
      dispatch(setBusinessError(error));
    })
    .then(() => dispatch(setBusinessIsLoading(false)));
};
