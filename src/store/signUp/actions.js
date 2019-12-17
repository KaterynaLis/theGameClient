import api from "../../api";

export function signUpSuccess(token) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: token
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
        const action = signUpSuccess(data.jwt);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
