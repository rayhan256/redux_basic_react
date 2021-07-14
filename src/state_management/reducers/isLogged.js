const initialState = false;

const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED":
      return action.payload;
    default:
      return state;
  }
};

export default isLogged;
