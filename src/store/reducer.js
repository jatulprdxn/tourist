const intialState = {
    cityData: []
}

const reducer = (state = intialState,action) => {
  switch(action.type) {
    case "GETCITYDATA" : {
      return {
        ...state,
        cityData:action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer;