import { createStore } from "redux";
import { expressionReducer } from "./genieexpression/genieExpressionReducer";

const store = createStore(expressionReducer);

export { store };
