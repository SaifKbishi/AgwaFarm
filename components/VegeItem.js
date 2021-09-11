import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const VegeItem = (props)=>{
  const [quantity, setQuantity] = useState(0);
  
  addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  removeItems = ()=>{
    if(quantity > 0){
      setQuantity(prevCount => prevCount - 1 );
    }else{
      setQuantity(0);
    }    
  }

  return(
    <View style={styles.vegeItem}>
      <TouchableOpacity style={styles.imgTitle}>
        <Image
          style={styles.tinyImage}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.vegeTitle}>{props.title}</Text>
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
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 2,
    paddingHorizontal: 20,
  },
  controlsBtns:{
    fontSize: 30,
    paddingHorizontal: 5,
  },
  vegeItem: {
    backgroundColor: '#E3E9F3',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgTitle:{
    width:'65%',
    flexDirection: 'row',
  },
  vegeTitle:{
    fontSize: 25,
  },
  tinyImage: {
    width: 40,
    height: 40,
    margin: 5,
  },
});

export default VegeItem;