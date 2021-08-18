import {
  SET_PERSONS_DATA,
  SET_PERSONS_IS_LOADING,
  SET_PERSONS_ERROR,
} from "./actionTypes";
import { getServerClient } from "../../utils/networkUtils";

export const setPersonsData = (data) => ({
  type: SET_PERSONS_DATA,
  payload: { data },
});

export const setPersonsIsLoading = (isLoading) => ({
  type: SET_PERSONS_IS_LOADING,
  payload: { isLoading },
});

export const setPersonsError = (error) => ({
  type: SET_PERSONS_ERROR,
  payload: { error },
});

export const fetchPersons = (businessId) => (dispatch) => {
  dispatch(setPersonsIsLoading(true));

  getServerClient()
    .get(`/business/${businessId}/persons`)
    .then((response) => {
      dispatch(setPersonsData(response.data.persons));
    })
    .catch((error) => dispatch(setPersonsError))
    .then(() => dispatch(setPersonsIsLoading(false)));
};
