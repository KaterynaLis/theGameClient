const initialState = {
  jwt: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return { ...state, jwt: action.payload };

    default:
      return state;
  }
}
