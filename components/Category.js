import React, { useState } from 'react';
import { List,ListItemText} from 'react-native-paper';
import Collapse from "@material-ui/core/Collapse";

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from './VegeItem';

const Category = (props)=>{
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

  // console.log('Category props.categoryDetails.name:', props.categoryDetails.name);
  console.log('\n\n Category props.categoryDetails.plants:', props.categoryDetails.plants);

  return(    
    // <View style={styles.categoryItem}>
    //   <TouchableOpacity  style={styles.cateName} key={props.categoryDetails.id} >
    //     <Text style={styles.categoryTitle}>{props.categoryDetails.name}</Text>
    //   </TouchableOpacity>
    // </View>
    <List.AccordionGroup> 
      <List.Accordion title={props.categoryDetails.name} id={props.categoryDetails.id} expanded={expanded} onPress={handlePress}       >
        {props.categoryDetails.plants && props.categoryDetails.plants.map((plant)=>{return(<List.Item title={plant.name} style={styles.plantItem}/>)})}
      </List.Accordion>
    </List.AccordionGroup>
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
});

export default Category;