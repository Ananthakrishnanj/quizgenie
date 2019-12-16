import {
  CHANGE_NAME,
  CHANGE_CATEGORYID,
  CHANGE_CATEGORYNAME,
  CHANGE_SCORE,
  CHANGE_TOTALSCORE,
  CHANGE_GAMESTATUS,
  UPDATE_GAMEPOINT
} from "./gameStatusActionTypes";

const changeName = name => {
  return {
    type: CHANGE_NAME,
    payload: name
  };
};

const changeCategoryId = id => {
  return {
    type: CHANGE_CATEGORYID,
    payload: id
  };
};

const changeCategoryName = name => {
  return {
    type: CHANGE_CATEGORYNAME,
    payload: name
  };
};

const changeScore = score => {
  return {
    type: CHANGE_SCORE,
    payload: score
  };
};

const changeTotalScore = score => {
  return {
    type: CHANGE_TOTALSCORE,
    payload: score
  };
};

const changeGameStatus = status => {
  return {
    type: CHANGE_GAMESTATUS,
    payload: status
  };
};

const updateScore = score => {
  return {
    type: UPDATE_GAMEPOINT,
    payload: score
  };
};

export {
  changeName,
  changeCategoryId,
  changeCategoryName,
  changeGameStatus,
  changeScore,
  changeTotalScore,
  updateScore
};
