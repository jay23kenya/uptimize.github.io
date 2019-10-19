import {
  CONTACT_LOADING,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  CONTACT_ERROR
} from "../types";
import axios from "axios";

export const addContact = contact => dispatch => {
  dispatch({ type: CONTACT_LOADING });

  axios
    .post("/api/contact", contact)
    .then(res => {
      dispatch({
        type: ADD_CONTACT,
        payload: res.data.contact
      });
      dispatch({ type: ADD_CONTACT_SUCCESS });
    })
    .catch(error => {
      dispatch({
        type: CONTACT_ERROR,
        message: error.response.data.message
      });
      console.log(error);
    });
};
