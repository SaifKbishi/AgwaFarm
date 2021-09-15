import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import users from '../files/users';

console.log('\nHello from Device\n')
const Device = ()=>{
  const [devices , setDevices] =useState([]);
  const [selectedDevice, setslectedDevice] = useState();

  useEffect(()=>{
    fetchDevices();
    // getDevices();
  },[devices]);

  const fetchDevices = ()=>{
    try{
       setDevices(users.devices);
    }catch(error){
      console.log('could not fethc devices')
    }    
  }//fetchDevices

  const deviceSelected =(deviceName)=>{
    console.log('selected device: ', deviceName)
  }

  const renderDevices =  devices.map((device)=>{
    return(
      <TouchableOpacity style={styles.device} key={device.id} onPress={()=>deviceSelected(device.deviceName)}>
        <Text style={styles.deviceTitle}>{device.deviceName}</Text>
      </TouchableOpacity>   
    )
  });

  return(
    <View style={styles.allDevice}>
      {renderDevices}
    </View>
  )
}

const styles = StyleSheet.create({
  allDevice:{
    backgroundColor: '#147332',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 70,
    borderRadius:5,
  },
  deviceTitle:{
    color: '#000',
    backgroundColor: '#27AE60',
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
  device: {
    color: '#000',
  },

});

export default Device;