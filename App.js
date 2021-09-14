/**
 * Agwa Farm
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import Category from './components/Category';
import VegeItem from './components/VegeItem';
import Header from './components/Header';
import Device from './components/Device';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

// import {
//   // Header,
//   // Colors,
// } from 'react-native/Libraries/NewAppScreen';

const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';


const App: () => React$Node = () => {
  const [categories, setCategories] = useState();
  const [plants, setPlants] = useState();
  console.log('hello from AgwaFarm');

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async ()=>{
    const categories = await axios.get(categoriesURL);
    setCategories(categories);
  }//getCategories

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Header/>            
            <Device/>
            <Categories/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'green',
    marginLeft: 1,
    marginRight: 1,
  }, 
  body: {
    backgroundColor: 'white',
  },
});

export default App;
