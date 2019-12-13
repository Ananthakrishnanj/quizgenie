import { CHANGE_EXPRESSION } from "./actionTypes";

const changeExpression = name => {
  return {
    type: CHANGE_EXPRESSION,
    payload: name
  };
};

export { changeExpression };
