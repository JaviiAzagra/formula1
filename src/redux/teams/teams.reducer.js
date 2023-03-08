const INITIAL_STATE = {
    teams: [],
    isLoading: false,
    error: false,
  };
  
  const teamsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "gettingTeams":
        return { ...state, isLoading: true };
      case "getTeams":
        return {
          ...state,
          isLoading: false,
          teams: action.payload,
          error: false,
        };
      case "errorTeams":
        return {
          ...state,
          isLoading: false,
          teams: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default teamsReducer;