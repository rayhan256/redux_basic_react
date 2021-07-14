export const loggedIn = (status) => {
  return {
    type: "LOGGED",
    payload: status,
  };
};

export const authSuccess = () => {
  return {
    type: "AUTH_SUCCESS",
  };
};

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: "AUTH_INPUT",
      payload: { email, password },
    });

    setTimeout(() => {
      if (email === "rayhangamawanto@gmail.com" && password === "123123") {
        dispatch(loggedIn(true));
        setTimeout(() => {
          dispatch(authSuccess());
        }, 500);
      } else {
        dispatch(loggedIn(false));
        alert("Email atau Password Salah");
      }
    }, 1000);
  };
};
