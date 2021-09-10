import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const VegeItem = (props)=>{
  const [quantity, setQuantity] = useState(0);
  addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  removeItems = ()=>setQuantity(prevCount => prevCount - 1 );

  return(
    <View style={styles.vegeItem}>
      <TouchableOpacity>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text>Title</Text>
      </TouchableOpacity>
      <View>
        <Text>{quantity}</Text>
        <TouchableOpacity onPress={addItems}> - </TouchableOpacity>
        <TouchableOpacity onPress={removeItems}> + </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({

});

export default VegeItem;