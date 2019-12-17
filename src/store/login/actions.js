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
        const action = saveAccessToken(data.jwt);
        dispatch(action);
      })

      .catch(err => console.log("err", err));
  };
}

export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}

export function userInfo(profile) {
  return {
    type: "USER_PROFILE",
    payload: profile
  };
}
// export function userLoggedIn(token) {
//   return {
//     type: "auth/USER_LOGGED_IN",
//     payload: { token: token }
//   };
// }
