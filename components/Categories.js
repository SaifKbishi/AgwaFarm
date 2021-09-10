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
  const [categories, setCategories] = useState();
  console.log('hello from Categories');

  useEffect(() => {
    getCategories();

  }, []);

    const getCategories = async ()=>{
    const categories = await axios.get(categoriesURL);
    setCategories(categories);
    // console.log('\n categories', categories)
    // console.log('\n\n categories30', categories.request)
    console.log('\n\n categories31:', categories.request._response)    
    console.log('\n\n categories32: ', categories.request._response)
  }//getCategories

  return(
    <View style={styles.vegeItem}>
      {/* <TouchableOpacity style={styles.imgTitle}>
        <Image
          style={styles.tinyImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.vegeTitle}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.quantityControls}>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={removeItems}><Text style={styles.controlsBtns}> - </Text></TouchableOpacity>
        <TouchableOpacity onPress={addItems}><Text style={styles.controlsBtns}> + </Text></TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
 
});

export default Categories;

