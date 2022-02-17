console.log('\n ds.js working');

const axios = require('axios');
const categoriesData=[];
const plantsData =[];

const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

getCategories();
getPlants();

async function getCategories(){
  try{
    const cateResponse = await axios.get(categoriesURL)
    .then((cateResponse)=>{
      let cateData = cateResponse.data.categories;
      cateData.forEach(cateItem => {
        cateItem.plants.forEach(plant => {
          let cateObj ={
            categoryId: cateItem.id,
            categoryName: cateItem.name,
            plantId: plant.id,
            plantName: plant.name,
          }
          categoriesData.push(cateObj);
        });
      });
    });
    console.log(categoriesData)
  }catch(error){
      console.log('\n error in getCategories: ',error);
      }
}//getCategories

async function getPlants(){
  try{
    const plantsResponse = await axios.get(plantsURL)
    .then((plantsResponse)=>{
      let plantsData = plantsResponse.data.plants;
      plantsData.forEach(plantItem => {
        let plantObj ={
          plantId:plantItem.id,
          plantName:plantItem.name,
          plantImageId:plantItem.imageId,
          plantSeedToCrop:plantItem.seedToCrop,
          plantYield:plantItem.yield,
          plantLifeCycle:plantItem.lifeCycle,                    
          plantDescription:plantItem.description,                    
          plantNutritionFactsPortionInfo:plantItem.nutritionFacts.portionInfo,
          plantNutritionFacts:plantItem.nutritionFacts.items,
        }
        plantsData.push(plantObj);
      });
      // console.log('65',plantsData)
      // console.log('66: ',plantsData.plantDescription)
      printPlants(plantsData);
    });
  }catch(error){console.log('\n error fetching plants=>', error)}
}//getPlants


const printPlants =(array)=>{
  array.forEach(element => {
    console.log(element)
  });
}

