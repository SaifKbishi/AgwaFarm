import axios from 'axios';

// const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

// export async function getCate(result){
//   return await axios.get(categoriesURL,{data:result})
//   then(response => response.data)
// }
export async function getPlants2(result){
  return await axios.get(plantsURL, {data: result})
}



export const getCate = async (payload) => {
  const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
  return await axios(categoriesURL, {   
    data: payload,
  })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};