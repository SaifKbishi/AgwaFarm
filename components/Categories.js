import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Category from './Category';
import { Portal, Provider } from 'react-native-paper';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';
const categoriesDataArray=[];
const plantsDataArray =[];
let fullPlantData =[];

const Categories = ()=>{
  const [categoriesData, setCategoriesData] = useState([]);
  const [plantsData, setPlantsData] = useState([]);
  const [rawCategory, setRawCategory] = useState([]);

  console.log('hello from Categories');

  useEffect(() => {
    let source = axios.CancelToken.source();    
    getCategories();
    getPlants();
    addCategoryDetailsToPlantObj();  
    // console.log('\n\n\n\n rawCategory from Categories:\n',rawCategory);
    // console.log('\n\n\n\n36 categoriesData from Categories:\n',categoriesData);    
    // console.log('\n\n\n\n36_2 plantsData from Categories:\n',plantsData);   
    return () => {
      source.cancel('Cancelling in cleanup');  
    }
  }, []);
 
  const getCategories = async () =>{
    try{
      const cateResponse = await axios.get(categoriesURL)
        let cateData = cateResponse.data.categories;
        setRawCategory(cateData);
        cateData.forEach(cateItem => {
          cateItem.plants.forEach(plant => {
            let cateObj ={
              categoryId: cateItem.id,
              categoryName: cateItem.name,
              plantId: plant.id,
              plantName: plant.name,
            } 
            categoriesDataArray.push(cateObj);
          });
        });
        setCategoriesData(categoriesDataArray);
      // });
    }catch(error){      
      console.log('\n error in getCategories: ',error);
      }
  }//getCategories

  const getPlants = async () =>{
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
          plantsDataArray.push(plantObj);
        });
        setPlantsData(plantsDataArray);
        // setPlantsData(response.data.plants);
      });
    }catch(error){console.log('\n error fetching Plants', error)}
  }//getPlants
    
  const addCategoryDetailsToPlantObj = async ()=>{
    if(plantsData.length > 0 && categoriesData.length >0){
    fullPlantData = plantsData.map(plant =>{
        let plantInCate = categoriesData.find(pIC => pIC.plantId === plant.plantId);
        return plantInCate ? {...plant, ...plantInCate} : plant;
      }); 
    }    

  }//addCategoryDetailsToPlantObj

  return(
    <View style={styles.vegeItem}>
      {/* <Provider> */}
        <Category categoryDetails={rawCategory} fullPlantData={fullPlantData} />
      {/* </Provider> */}
    </View>    
  )
}

const styles = StyleSheet.create({
 categoryTitle:{
   color: '#333',
   fontSize: 40,
   paddingHorizontal: 5,
 },
 cateName:{
   backgroundColor: '#52A96D',
   borderRadius: 10,
 },
 categoryItem:{
   marginTop: 2,
 },
});

export default Categories;

