import { CHANGE_EXPRESSION } from "./actionTypes";

const initialState = {
  genieExpression: "idle"
};
const expressionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EXPRESSION:
      return {
        ...state,
        genieExpression: action.payload
      };
    default:
      return state;
  }
};

export { expressionReducer };
