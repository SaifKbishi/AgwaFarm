import React, { useState } from 'react';
import { List,ListItemText} from 'react-native-paper';
import Collapse from "@material-ui/core/Collapse";
import { Portal, Provider } from 'react-native-paper';

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from './VegeItem';

const Category = (props)=>{
  // console.log('9 ',props.plantsData)
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
 
  return(
    
    <List.AccordionGroup> 
    
      <List.Accordion title={props.categoryDetails.name} id={props.categoryDetails.id} expanded={expanded} onPress={handlePress}       >
      {/* <Portal> */}
        {/* {props.categoryDetails.plants && props.categoryDetails.plants.map((plant)=>{return(<List.Item title={plant.name} style={styles.plantItem}/>)})} */}
        {/* {props.categoryDetails.plants && props.categoryDetails.plants.map((plant)=>{return(<VegeItem  title={plant.name} style={styles.plantItem}/>)})} */}
        
        {props.categoryDetails.plants && props.categoryDetails.plants.map((plant)=>{
          return(<VegeItem plant={plant} style={styles.plantItem}/>)
          })}
        {/* {props.plantsData && props.plantsData.map((plant)=>{
          return(<VegeItem plant={plant} style={styles.plantItem}/>)
          })} */}
            {/* </Portal> */}
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