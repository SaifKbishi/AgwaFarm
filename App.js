/**
 * Agwa Farm
 * Saif
 */
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import Category from './components/Category';
import VegeItem from './components/VegeItem';
import Header from './components/Header';
import Device from './components/Device';
import { Portal, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, AppState, } from 'react-native';
import {orderContext} from './orderContext';

const categoriesURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json';
const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

const App: () => React$Node = () => {
  console.log('hello from AgwaFarm');
  const [categories, setCategories] = useState();
  const [plants, setPlants] = useState();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const {Provider} = orderContext;
  const [user, setUser, device, setDevice, order, setOrder] = useState([]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });
    getCategories();

    return () => {
      subscription.remove();
    };
  }, [])

  const getCategories = async ()=>{
    const categories = await axios.get(categoriesURL);
    setCategories(categories);
  }//getCategories

  return (
    <>
     <PaperProvider >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Header/>            
            <Device/>
            <Categories/>
          </View>
        </ScrollView>
      </SafeAreaView>
       </PaperProvider >
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: 'green',
    marginLeft: 1,
    marginRight: 1,
    flex: 1,
  }, 
  body: {
    backgroundColor: 'white',
  },
});

export default App;
