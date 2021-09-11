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

const Categories = ()=>{
  const [categoriesData, setCategoriesData] = useState();
  console.log('hello from Categories');

  useEffect(() => {
    getCategories();
    // getCategoriesWithFetch();
  }, []);

  const getCategories = async ()=>{
    try{
      const response = await axios.get(categoriesURL)
      .then((response)=>{
        setCategoriesData(JSON.parse(response.request._response))
      });
    }catch(error){
      console.log('error in getCategories: ',error);
      }
  }//getCategories

  // const getCategoriesWithFetch = async ()=>{
  //   try{
  //     const response = await fetch(categoriesURL);
  //     const jsonResponse = await response.json();
  //     setCategoriesData(jsonResponse.request._response);
  //     console.log('42 ', jsonResponse.request._response)
  //   }catch(error){console.log('error fetching: ', error)}
  // }//getCategoriesWithFetch

  console.log('35 categoriesData: ', categoriesData);

  const displayCategoryPlants = (plants)=>{
    console.log('\n id:', plants);
    plants.map((plant)=>{
      return(
        <View>
        <TouchableOpacity>
          <Text key={plant.id}>{plant.name}</Text>
        </TouchableOpacity>
      </View>
      );
    });
  }//displayCategoryPlants

  // const renderCategories = categoriesData.categories.map((categoryDetails)=>{
  //   return(
  //     <>
  //       <Category categoryDetails={categoryDetails}/>
  //     </>
  //     // <View style={styles.categoryItem}>
  //     //   <TouchableOpacity  style={styles.cateName} key={categoryDetails.id} onPress={()=>displayCategoryPlants(categoryDetails.plants)}>
  //     //     <Text style={styles.categoryTitle}>{categoryDetails.name}</Text>
  //     //   </TouchableOpacity>
  //     // </View>    
  //   )
  // });
  const renderCategories = async ()=>{
    if(categoriesData){
      await categoriesData.categories.map((categoryDetails)=>{
    return(
      <>
        <Category categoryDetails={categoryDetails}/>
      </>
    )})
    }
    else{return <>''</> }
  }

  return(
    <View style={styles.vegeItem}>
    <Text>hi</Text>
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

