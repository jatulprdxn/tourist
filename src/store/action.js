import { getData } from '../service/fetch'

export const showCity =  (city) => async dispatch => {
  const res = await getData(city);
 const resp = res.filter(item => item['place'] === city);
 console.log(resp[0].visitingplace);
  return dispatch({type:"GETCITYDATA",payload:resp});
}