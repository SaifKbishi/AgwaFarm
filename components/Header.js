import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import users from '../files/users';

const Header = ()=>{  
  return(
    <View style={styles.header}>
    <TouchableOpacity>
      <Text style={styles.headerText}>Menu</Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.logoContainer}>
        <Image style={styles.logo} source={{
            uri: `https://static.wixstatic.com/media/140a3e_57c521d708be4fdd96f1816b71ca70ae~mv2.png/v1/fill/w_225,h_157,al_c,lg_1,q_85/logo-02%201.webp`,
            alt:'AgwaFarmLogo'
          }}
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
   height: 60,
   width: 70,
 },
 headerText:{
   paddingVertical:15,
   paddingHorizontal:5,
 },
});

export default Header;