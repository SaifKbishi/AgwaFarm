import React, { useState } from 'react';
import { List,ListItemText} from 'react-native-paper';
import { Portal, Provider } from 'react-native-paper';

import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
// import VegeItem from '../Vegetables/VegeItem';
import VegeItem3 from '../Vegetables/VegeItem3';

// const Category = (props)=>{
const Category = ({categoryDetails, fullPlantData})=>{
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  console.log('\n15 fullPlantData: \n', fullPlantData);
  
  return(    
    <>
      {categoryDetails && 
        categoryDetails.map((cate)=>{
          // console.log('18 18',cate)
          return(
            <List.AccordionGroup id={cate.id} style={styles.AccordionGroup}>
            <List.Accordion title={cate.name} id={cate.id} expanded={expanded} onPress={handlePress}>
              {/* <VegeItem category={cate.id} fullPlantData={fullPlantData} key={index}/> */}
              {
              fullPlantData.filter(plantDtls=> 
                plantDtls.categoryId === cate.id).map((plantDetails)=>{
                  // console.log('2626',plantDetails)
                  return(
                    // <View style={styles.vegeItem} key={plantDetails.plantId}>   
                    //   <TouchableOpacity style={styles.imgTitle} >
                    //     <Image style={styles.tinyImage} source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails.plantImageId}@3x.jpg`,}}/>
                    //     <Text style={styles.vegeTitle}>{plantDetails.plantName}</Text>
                    //   </TouchableOpacity>
                    // </View>
                    <VegeItem3 category={cate.id} plantDetails5={plantDetails} />
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
