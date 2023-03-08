import axios from "axios";

export const getTeams = () => async (dispatch) => {
  dispatch({ type: "gettingTeams" });

  try {
    const result = await axios("http://localhost:8080/teams");
    dispatch({ type: "getTeams", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorTeams", payload: error.message });
  }
};