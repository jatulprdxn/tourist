import axios from 'axios';


export const getData = async (city) =>   {
  try {
    const response = await axios.get('./data.json')
    return response.data;
  }
  catch(error) {
    return false;
  }

//  let actualData;
 
//   fetch('./data.json')
//   .then((res) => res.json())
//   .then((data) => {
//     actualData =  data.filter(item => {
//         if(item['place'] === city) {
//           console.log(item);
//            return item;
//         }
       
//      })
//      console.log("ac",actualData);
//   })

//   console.log("rsrwer",actualData);
}