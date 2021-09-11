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
  const [categoriesData, setCategoriesData] = useState([]);
  console.log('hello from Categories');

  useEffect(() => {
    getCategories();
    // getCategoriesWithFetch();
  }, []);

  const getCategories = async ()=>{
    try{
      const response = await axios.get(categoriesURL)      
      .then((response)=>{
        console.log('33 ',JSON.parse(response.request._response))
        setCategoriesData(JSON.parse(response.request._response).categories)
      });
    }catch(error){
      console.log('\n error in getCategories: ',error);
      }
  }//getCategories

  console.log('41 categoriesData: ', categoriesData);
  // console.log('42 categoriesData: ',typeof( categoriesData.categories));

  // const renderCategories = categoriesData.categories.map((categoryDetails)=>{
  const renderCategories = categoriesData.map((categoryDetails)=>{
    return(
      <>
        <Category categoryDetails={categoryDetails}/>
      </>
      // <View style={styles.categoryItem}>
      //   <TouchableOpacity  style={styles.cateName} key={categoryDetails.id} onPress={()=>displayCategoryPlants(categoryDetails.plants)}>
      //     <Text style={styles.categoryTitle}>{categoryDetails.name}</Text>
      //   </TouchableOpacity>
      // </View>    
    )
  });


  return(
    <View style={styles.vegeItem}>
    <Text>hi</Text>
      {/* <Category /> */}
      {renderCategories}
      {/* {categoriesData.categories && categoriesData.categories.map((categoryDetails)=>{
        return (<><Category categoryDetails={categoryDetails}/></>);
      })} */}
      {/* {categoriesData.categories && categoriesData.categories.map((categoryDetails)=>{
        return (<><Category categoryDetails={categoryDetails}/></>);
      })} */}

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

