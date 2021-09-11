import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from './VegeItem';

const Category = (props)=>{
  // console.log('Category props:', props);
  console.log('Category props.categoryDetails.name:', props.categoryDetails.name);

  return(
    
    <View style={styles.categoryItem}>
      <TouchableOpacity  style={styles.cateName} key={props.categoryDetails.id}>
        <Text style={styles.categoryTitle}>{props.categoryDetails.name}</Text>
      </TouchableOpacity>
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

export default Category;