import { getData } from '../service/fetch'
import { guideProfile } from '../service/fetch';


export const showCity =  (city) => async dispatch => {
  const res = await getData(city);
  const resp = res.filter(item => item['place'] === city); 
  return dispatch({type:"GETCITYDATA",payload:resp});
}

export const getGuideDetail = (name) => async dispatch => {
  const res = await guideProfile(name);
  const resp =  res.filter(item => item['name'] === name);
  console.log("guideskfhskfsss",resp);
  return dispatch({type:"GUIDEDETAIL",payload:resp})
}