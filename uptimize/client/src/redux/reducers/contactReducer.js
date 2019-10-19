import {
  CONTACT_LOADING,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  CONTACT_ERROR
} from "../types";

const initialState = {
  admin: {
    fullName: "",
    email: "",
    phone: "",
    questions: []
  },
  contactLoading: false,
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
      
    case ADD_CONTACT:
      return {
        ...state,
        contact: action.payload
      };

    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        message: "Thank you, we will contact you shortly",
        contactLoading: false
      };

    case CONTACT_ERROR:
      return {
        ...state,
        message: action.message,
        contactLoading: false
      };

    case CONTACT_LOADING:
      return {
        ...state,
        contactLoading: true
      };

    default:
      return state;
  }
}
