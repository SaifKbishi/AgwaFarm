import React, { useState } from 'react';
import { List,ListItemText} from 'react-native-paper';
import { Portal, Provider } from 'react-native-paper';

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from '../Vegetables/VegeItem';

const Category = ({categoryDetails, fullPlantData})=>{
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  console.log('fullPlantData: \n', fullPlantData); 
  
  return(    
    <>
      {categoryDetails && 
        categoryDetails.map((cate)=>{
          return(
            <List.AccordionGroup id={cate.id} style={styles.AccordionGroup} key={cate.id}>
            <List.Accordion title={cate.name} id={cate.id} expanded={expanded} onPress={handlePress}>
              {fullPlantData && fullPlantData.filter(plantDtls=> 
                plantDtls.categoryId === cate.id).map((plantDetails, index)=>{
                  return(   
                    <VegeItem category={cate.id} plantDetails5={plantDetails} key={index}/>
                  )
                })}
            </List.Accordion>
            </List.AccordionGroup>  
          );
        })}
    </>
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
 plantItem:{
   color: '#880000'
 },
 AccordionGroup:{
   height:800,
 },
 tinyImage: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 5,
    borderColor: '#47AB48',
    borderWidth: 1,
  },
});

export default Category;
