import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const Header = ()=>{

  return(
    <View style={styles.device}>
      <TouchableOpacity style={styles.header}> 
        <Text >Header</Text>
      </TouchableOpacity>      
    </View>
  )
}

const styles = StyleSheet.create({
 header:{
   height:50,
   backgroundColor: '#19E75B'
 }
});

export default Header;