const initialState = {
  data: {
    email: "",
    password: "",
  },
  status: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_INPUT":
      return {
        ...state,
        data: action.payload,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        status: true,
      };
    default:
      return state;
  }
};

export default auth;
