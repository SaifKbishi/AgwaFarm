console.log('\n ds.js working');

const axios = require('axios');
const categoriesData=[];
const plantsData =[];
const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

getCategories();

async function getCategories(){
  try{
    const cateResponse = await axios.get(categoriesURL)
    .then((cateResponse)=>{
      let cateData = cateResponse.data.categories;
      // console.log(cateData);
      cateData.forEach(cateItem => {
        console.log(cateItem.name);
        console.log(cateItem.plants);
        cateItem.plants.forEach(plant => {
          console.log('plant.id: ',plant.id)
        });
      });
    });
  }catch(error){
      console.log('\n error in getCategories: ',error);
      }
}//getCategories