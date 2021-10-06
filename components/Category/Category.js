import React, { useState } from 'react';
import { List,ListItemText} from 'react-native-paper';
import { Portal, Provider } from 'react-native-paper';

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from '../Vegetables/VegeItem';

const Category = ({categoryTitle, categoryId, categoryPlants, plantsData})=>{
  // console.log('9 categoryPlants: ',categoryPlants)
  // console.log('10 plantsData:',plantsData)
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  // console.log('fullPlantData: \n', fullPlantData.length); 

  return(
    // console.log(categoryPlants[0].name),
    // console.log(plantsData[0].name),
    console.log( '18',
      plantsData.filter((plant) => { 
        return categoryPlants.find((cp)=>{
          return cp.id === plant.id
        })
      })
    ),
    <>
      {/* {categoryDetails && 
        categoryDetails.map((cate)=>{
          return(
            // <List.AccordionGroup id={cate.id} style={styles.AccordionGroup} key={cate.id}>
            <List.Accordion title={cate.name} id={cate.id} expanded={expanded} onPress={handlePress}>
{fullPlantData && fullPlantData.filter(plantDtls=> plantDtls.categoryId === cate.id)
                .map((plantDetails, index)=>{
                  return(   
                    <VegeItem category={cate.id} plantDetails5={plantDetails} key={index}/>
                  )
                })}
            </List.Accordion>
            // </List.AccordionGroup>  
          );
        })} */}
      <List.Accordion title={categoryTitle} id={categoryId} expanded={expanded} onPress={handlePress}>
        {plantsData.filter((plant) => { 
          return categoryPlants.find((catPlant)=>{
            return catPlant.id ===plant.id
          })
          }).map((plant_details, index)=>{
            return <Text>{plant_details.name}</Text>
            // return(   
            //   <VegeItem plant_details={plant_details} key={index}/>
            // )
          })
        }
        
      </List.Accordion >

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
