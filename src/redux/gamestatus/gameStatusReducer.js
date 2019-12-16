import {
  CHANGE_NAME,
  CHANGE_CATEGORYID,
  CHANGE_CATEGORYNAME,
  CHANGE_SCORE,
  CHANGE_TOTALSCORE,
  CHANGE_GAMESTATUS,
  UPDATE_GAMEPOINT
} from "./gameStatusActionTypes";

const intialState = {
  name: "",
  categoryId: "any",
  categoryName: "Any Category",
  score: 0,
  totalScore: 10,
  gameStatus: false
};

const gameStatusReducer = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case CHANGE_CATEGORYID:
      return {
        ...state,
        categoryId: action.payload
      };
    case CHANGE_CATEGORYNAME:
      return {
        ...state,
        categoryName: action.payload
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload
      };
    case CHANGE_TOTALSCORE:
      return {
        ...state,
        totalScore: action.payload
      };
    case CHANGE_GAMESTATUS:
      return {
        ...state,
        gameStatus: action.payload
      };
    case UPDATE_GAMEPOINT:
      return {
        ...state,
        score: action.payload + state.score
      };
    default:
      return state;
  }
};

export { gameStatusReducer };
