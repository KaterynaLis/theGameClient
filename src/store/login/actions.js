import api from "../../api";

export function login(user_name, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        user_name: user_name,
        password: password
      }
    })
      .then(data => {
        console.log("data", data);
        const action = userLoggedIn(data);
        dispatch(action);
      })

      .catch(err => console.log("err", err));
  };
}

export function userLoggedIn({ jwt, user_name }) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: { jwt, user_name }
  };
}

export function signUp(name, password) {
  return function thunk(dispatch, getState) {
    api("/users", {
      method: "POST",
      body: {
        user_name: name,
        password: password
      }
    })
      .then(data => {
        console.log("data", data);
      })
      .catch(err => console.log("err", err));
  };
}
