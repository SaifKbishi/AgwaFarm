import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Category from './Category';
import { Portal, Provider, List,ListItemText } from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity,} from 'react-native';
const {getCategoryData,getPlantsData} = require('../../DAL/DAL');

let fullPlantData =[];
const categoriesDataArray=[];

const Categories = ()=>{
  const [categoriesData, setCategoriesData] = useState([]);      
  const [plantsData, setPlantsData] = useState([]); 
  const [rawCategory, setRawCategory] = useState([]);   
 
  useEffect(() => {
    let source = axios.CancelToken.source();         
    getCategories();
    getPlants();
    return () => { 
      source.cancel('Cancelling in cleanup');   
    }    
  }, []);
 
  const getCategories = async () =>{  
    try{
      const cateResponse = await getCategoryData();
        setRawCategory(cateResponse.data.categories);    
        setCategoriesData(cateResponse.data.categories);
    }catch(error){  
      console.log('\n error in getCategories: ',error);    
      }   
  }//getCategories 

  const getPlants = async () =>{ 
    try{
      const plantsResponse = await getPlantsData();
        setPlantsData(plantsResponse.data.plants);
    }catch(error){console.log('\n error fetching Plants', error)}
  }//getPlants    

  return(
    <View style={styles.vegeItem}> 
      {categoriesData && categoriesData.map((category, index)=>{
        return(
          <List.AccordionGroup id={index} key={index}>
              <Category categoryId={category.id} categoryTitle={category.name} categoryPlants={category.plants} plantsData={plantsData} />
          </List.AccordionGroup>
        )
      })}
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

