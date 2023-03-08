const INITIAL_STATE = {
    drivers: [],
    isLoading: false,
    error: false,
  };
  
  const driversReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "gettingDrivers":
        return { ...state, isLoading: true };
      case "getDrivers":
        return {
          ...state,
          isLoading: false,
          drivers: action.payload,
          error: false,
        };
      case "errorDrivers":
        return {
          ...state,
          isLoading: false,
          drivers: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default driversReducer;