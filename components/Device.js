import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const deviceURL = './files/devices.js'
console.log('\n\n\n Hello from Device')
const Device = ()=>{
  useEffect(()=>{
    getDevices();
  },[]);

  const getDevices = async ()=>{
    try {
      const response = await axios.get(deviceURL)
      .then((response)=>{
        console.log('\n\n response: ', response)
      })
    } catch (error) {
      console.log('error fetching devices: ', error)
    }
  }//getDevices

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
  device: {
    backgroundColor: '#147332'
  },
});

export default Device;