import axios from "axios";

export const getDrivers = () => async (dispatch) => {
  dispatch({ type: "gettingDrivers" });

  try {
    const result = await axios("http://localhost:8080/drivers");
    dispatch({ type: "getDrivers", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorDrivers", payload: error.message });
  }
};