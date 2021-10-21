import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import users from '../files/users';
import myGarden from '../files/myGarden.png'

const Header = ()=>{  
  return(
    <View style={styles.header}>
    <TouchableOpacity>
      <Text style={styles.headerText}>Menu</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer}>
        <Image style={styles.logo} 
          source={require('../files/myGarden.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.headerText}>{users.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
 header:{
   height:60,
   backgroundColor: '#F4FEF8',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between'
 },
 logo:{
   resizeMode: "contain",
   height: 75,
   width: 80,
 },
 headerText:{
   paddingVertical:15,
   paddingHorizontal:5,
 },
});

export default Header;