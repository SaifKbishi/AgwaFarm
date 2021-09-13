import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Category from './Category';

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

const Categories = ()=>{
  const [categoriesData, setCategoriesData] = useState([]);
  const [plantsData, setPlantsData] = useState([]);

  console.log('hello from Categories');

  useEffect(() => {
    getCategories();
    getPlants();
  }, []);

  const getCategories = async ()=>{
    try{
      const response = await axios.get(categoriesURL)      
      .then((response)=>{
        setCategoriesData(JSON.parse(response.request._response).categories)
      });
    }catch(error){
      console.log('\n error in getCategories: ',error);
      }
  }//getCategories
  const getPlants = async ()=>{
    try{
      const response = await axios.get(plantsURL)
      .then((response)=>{
        setPlantsData(response.data.plants);        
      });
    }catch(error){console.log('\n error fetching Plants', error)}
  }//getPlants
  // console.log('\n\n\n\n 46 plantsData:', plantsData)

  const renderCategories = categoriesData.map((categoryDetails)=>{
    return(
      <>
        <Category categoryDetails={categoryDetails} plantsData={plantsData} key={categoryDetails.id}/>
      </> 
    )
  });

  return(
    <View style={styles.vegeItem}>
      {renderCategories}
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

