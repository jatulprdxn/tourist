const intialState = {
    cityData: [],
    guideDetail:[]
}

const reducer = (state = intialState,action) => {
  switch(action.type) {
    case "GETCITYDATA" : {
      return {
        ...state,
        cityData:action.payload
      }
    }
    case "GUIDEDETAIL": {
     return {
      ...state,
      guideDetail:action.payload
     }
    }
    default:
      return state;
  }
}

export default reducer;