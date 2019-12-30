import axios from 'axios';


export const getData = async (city) =>   {
  try {
    const response = await axios.get('./data.json')
    //console.log("check",response)
    return response.data;
  }
  catch(error) {
    return false;
  }
}


export const guideProfile = async (name) => {
  try {
    const response1 = await axios.get('http://localhost:3000/data1.json');
    return response1.data;
  }
  catch(error) {
    return false;
  }
} 