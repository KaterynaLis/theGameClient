const initialState = {
  accessToken: null,
  user_name: ""
};

export default function authReducer(state = initialState, action) {
  console.log("reducer", action);

  switch (action.type) {
    case "auth/USER_LOGGED_IN": {
      return {
        accessToken: action.payload.jwt,
        user_name: action.payload.user_name
      };
    }
    default: {
      return state;
    }
  }
}
