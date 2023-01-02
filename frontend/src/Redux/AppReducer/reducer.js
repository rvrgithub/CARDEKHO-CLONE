import * as types from "./action.type";
const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cars: payload,
        isError: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
