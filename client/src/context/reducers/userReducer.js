const userReducer = (state = null, action) => {
    switch (action.type) {
      case "GET_USER":
        return state;
  
      case "SET_USER":
        return action.user || null;
  
      case "SET_USER_NULL":
        return null;
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  