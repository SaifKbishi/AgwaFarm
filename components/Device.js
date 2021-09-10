import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const Device = ()=>{

  return(
    <View style={styles.device}>
      <TouchableOpacity style={styles.imgTitle}> 
        <Text >device</Text>
      </TouchableOpacity>      
    </View>
  )
}

const styles = StyleSheet.create({
  imgTitle:{
    flexDirection: 'row',
  },
  tinyImage: {
    width: 40,
    height: 40,
    margin: 5,
  },
});

export default Device;