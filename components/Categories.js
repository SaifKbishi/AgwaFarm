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

  }, []);

  const getCategories = async ()=>{
    try{
      const response = await axios.get(categoriesURL)
      .then((response)=>{
        setCategoriesData(JSON.parse(response.request._response))
      });
      console.log('categoriesData: ', categoriesData)
    }catch(error){
      console.log('error in getCategories: ',error);
      }
  }//getCategories        
  // console.log('\n\n categories35: ', categoriesData.categories[0].name);   

  const renderCategories = categoriesData.categories.map((categoryDetails)=>{
    return(
      <>
        <Category categoryDetails={categoryDetails}/>
      </>
    )
  });

  return(
    <View style={styles.vegeItem}>
    <Text>hi</Text>
    {renderCategories}
    </View>
  )
}

const styles = StyleSheet.create({
 
});

export default Categories;

