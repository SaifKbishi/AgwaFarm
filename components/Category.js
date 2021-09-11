import React, { useState } from 'react';
import { List,ListItemText  } from 'react-native-paper';
import Collapse from "@material-ui/core/Collapse";

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from './VegeItem';

const Category = (props)=>{
  	const [open, setOpen] = useState(false);

  console.log('Category props.categoryDetails.name:', props.categoryDetails.name);
  // console.log('Category props.categoryDetails.name:', props.categoryDetails.plants);

  return(    
    // <View style={styles.categoryItem}>
    //   <TouchableOpacity  style={styles.cateName} key={props.categoryDetails.id} >
    //     <Text style={styles.categoryTitle}>{props.categoryDetails.name}</Text>
    //   </TouchableOpacity>
    // </View>
    <List.AccordionGroup>
      <List.Accordion title={props.categoryDetails.name} id={props.categoryDetails.id}>
        <List.Item title="Item 1" />
        {props.categoryDetails.plants !== null ? <>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List >
              {props.categoryDetails.plants.map((plant)=>{<List.Item ket={plant.id} button ><ListItemText primary={plant.name} /></List.Item>})}
            </List>
          </Collapse>
        </> :null}
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
});

export default Category;