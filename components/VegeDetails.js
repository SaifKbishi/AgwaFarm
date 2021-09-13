import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const VegeDetails = (props)=>{
console.log('9 plantId', props.plant)
// console.log('10 plantsData', props.plantsData)


//  console.log('name: ',props.plant.name,'\nlifeCycle: ',plant.lifeCycle,'\nimageId: ', plant.imageId)
  return(
    
    <View>
      <TouchableOpacity style={styles.imgTitle} onPress={()=>displayPlantDetails(props.plant.id)}>
        <Image style={styles.tinyImage} source={{
            uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${props.plant.id}@3x.jpg`,            
          }}
        />
        <Text style={styles.vegeTitle}>{props.plant.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 
});

export default VegeDetails;
