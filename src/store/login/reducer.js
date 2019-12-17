const initialState = {
  accessToken: null,
  profile: { user_name: "" }
};

export default function authReducer(state = initialState, action) {
  console.log("reducer", action);

  switch (action.type) {
    case "auth/USER_LOGGED_IN": {
      return { accessToken: state.accessToken, profile: action.payload };
    }
    case "auth/SAVE_ACCESS_TOKEN": {
      return { accessToken: action.payload, profile: state.profile };
    }
    default: {
      return state;
    }
  }
}
