import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeItem from './VegeItem';

const Category = (props)=>{
  // const [quantity, setQuantity] = useState(0);
  // addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  // removeItems = ()=>setQuantity(prevCount => prevCount - 1 );

  return(
    <View style={styles.categoryItem}>
      {/* <TouchableOpacity style={styles.imgTitle}>
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
      </View> */}
      <VegeItem title={'tomato'}/>
      {/* <VegeItem title={'tomato'}/>
      <VegeItem title={'tomato'}/>
      <VegeItem title={'tomato'}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
 
});

export default Category;