import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

const VegeItem = (props)=>{
  const [quantity, setQuantity] = useState(0);
  const [plantsData, setPlantsData] = useState([]);
  addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  removeItems = ()=>{
    if(quantity > 0){
      setQuantity(prevCount => prevCount - 1 );
    }else{
      setQuantity(0);
    }    
  }
  

  const fetchPlantDetails = async (id)=>{
    console.log('id:', id);
    try{
      const response = await axios.get(plantsURL)
      .then((response)=>{
        // console.log('\n\n 35 plants111: ',response.request._response)
        // console.log('\n\n 35 plants111:typeof ',typeof(response.request._response))
        // setPlantsData(JSON.parse(response.request._response).plants);
        setPlantsData(response.data.plants);
      });
    }catch(error){console.log('Error fetching plant details: ', error)}
  }//fetchPlantDetails
  console.log('\n 30 plantsData:', plantsData)
  console.log('\n\n\n 31 plantsData:', plantsData)
  // console.log('29 plantsData:', plantsData.plants[0].name)

  return(
    <View style={styles.vegeItem}>
      <TouchableOpacity style={styles.imgTitle} onPress={()=>fetchPlantDetails(props.plant.id)}>
        <Image style={styles.tinyImage} source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
            // uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${props.imageId}@3x.jpg`,
          }}
        />
        <Text style={styles.vegeTitle}>{props.plant.name}</Text>
      </TouchableOpacity>
      <View style={styles.quantityControls}>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={removeItems}><Text style={styles.controlsBtns}> - </Text></TouchableOpacity>
        <TouchableOpacity onPress={addItems}><Text style={styles.controlsBtns}> + </Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  quantityControls:{
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  quantityText:{
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 2,
     borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  controlsBtns:{
    fontSize: 30,
    paddingHorizontal: 5,
  },
  vegeItem: {
    backgroundColor: '#E3E9F3',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
  },
  imgTitle:{
    width:'65%',
    flexDirection: 'row',
  },
  vegeTitle:{
    fontSize: 15,
    paddingVertical: 10,
  },
  tinyImage: {
    width: 40,
    height: 40,
    margin: 5,
  },
});

export default VegeItem;