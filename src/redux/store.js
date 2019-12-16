import { createStore, combineReducers } from "redux";
import { expressionReducer } from "./genieexpression/genieExpressionReducer";
import { gameStatusReducer } from "./gamestatus/gameStatusReducer";
const rootReducer = combineReducers({
  expression: expressionReducer,
  gameStatus: gameStatusReducer
});
const store = createStore(rootReducer);

export { store };
