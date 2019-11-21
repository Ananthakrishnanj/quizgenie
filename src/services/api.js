import Axios from "axios";

let getSessionToken = async () => {
  await Axios.get("https://opentdb.com/api_token.php?command=request")
    .then(res => {
      console.log(res.data.token)
      return res.data.token;
    })
    .catch(err => console.log(err));
};

let getQuesions = async categoryId => {
  let baseUrl = "https://opentdb.com/api.php?amount=10";
  if (categoryId !== "any") {
    baseUrl = baseUrl + "&category=" + Number(categoryId);
  }

  await Axios.get(baseUrl).then(res => {
    console.log(res.data.results)
    return res.data.results;
  });
};

export { getSessionToken, getQuesions };
