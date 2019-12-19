const initialState = [];

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_GAMEROOMS": {
      return action.payload;
    }
    case "NEW_GAMEROOM":
      return [...state, action.payload];
    default: {
      return state;
    }
  }
}
