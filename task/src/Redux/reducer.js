import {
  GET_TAST_REQUEST,
  GET_TAST_SUCCESS,
  GET_TAST_FAILUIR,
} from "./actionTypes";

const initialState = {
  task: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case GET_TAST_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case GET_TAST_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        task: action.payload,
      };

    case GET_TAST_FAILUIR:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};

export { reducer };
