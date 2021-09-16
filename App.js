/**
 * Agwa Farm
 * Saif
 */
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Categories from './components/Category/Categories';
import Category from './components/Category/Category';
import VegeItem from './components/Vegetables/VegeItem';
import Header from './components/Header';
import Device from './components/Device';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity, AppState } from 'react-native';

const App: () => React$Node = () => {
  console.log('hello from AgwaFarm');
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [user, setUser, device, setDevice, order, setOrder] = useState([]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if(
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [])

  return (
    <>
     <PaperProvider >
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
    marginLeft: 1,
    marginRight: 1,
    flex: 1,
  }, 
  body: {
    backgroundColor: 'white',
  },
});

export default App;
