import axios from 'axios';
const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

export async function getCategories2(){
  console.log('from DAL')
  return await axios.get(categoriesURL)
}
export async function getPlants2(){
  return await axios.get(plantsURL)
}

// export default DAL