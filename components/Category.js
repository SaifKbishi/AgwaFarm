import React, { useState } from 'react';
import { List,ListItemText} from 'react-native-paper';
import Collapse from "@material-ui/core/Collapse";
import { Portal, Provider } from 'react-native-paper';

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from './VegeItem';

const Category = (props)=>{
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  // console.log('\n13 rawCategory: ',props.categoryDetails)
  // console.log('\n14',props.categoryDetails[1].name)
  console.log('\n15 fullPlantData: ', props.fullPlantData);

  const renderCategories = props.categoryDetails.map((cate)=>{
    return(
      <List.AccordionGroup id={cate.id} style={styles.AccordionGroup}>
      <List.Accordion title={cate.name} id={cate.id} expanded={expanded} onPress={handlePress}>
        <VegeItem category={cate.id} fullPlantData={props.fullPlantData}/>      
      </List.Accordion>
      </List.AccordionGroup>  
    );
  });
  
  return(    
    <>    
      {/* {renderCategories} */}
      {props.categoryDetails && 
        props.categoryDetails.map((cate, index)=>{
          return(
            <List.AccordionGroup id={cate.id} style={styles.AccordionGroup}>
            <List.Accordion title={cate.name} id={cate.id} expanded={expanded} onPress={handlePress}>
              <VegeItem category={cate.id} fullPlantData={props.fullPlantData}/>
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
 }
});

export default Category;