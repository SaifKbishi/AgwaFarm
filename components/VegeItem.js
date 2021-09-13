import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeDetails from './VegeDetails';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

const VegeItem = (props)=>{
  // console.log('props: ', props);
  const [quantity, setQuantity] = useState(0);
  const [plantsData, setPlantsData] = useState([]);  
  const [plantDetails, setPlantDetails] = useState();
  // const [plant, setPlant] = useState('');

  // const [visible, setVisible] = React.useState(false);
  // const showDialog = () => setVisible(true);
  // const hideDialog = () => setVisible(false);

  const addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  const removeItems = ()=>{
    if(quantity > 0){
      setQuantity(prevCount => prevCount - 1 );
    }else{
      setQuantity(0);
    }    
  }
  useEffect(()=>{
     let source = axios.CancelToken.source();
    fetchPlantsData();
    return () => {
      source.cancel('Cancelling in cleanup');
    }
  },[]);

  const fetchPlantsData = async ()=>{
    try{
      const response = await axios.get(plantsURL)
      .then((response)=>{
        setPlantsData(response.data.plants);               
      });
    }catch(error){console.log('Error fetching plant details: ', error)}
  }//fetchPlantDetails  
  const displayPlantDetails = (id)=>{
    const plant = plantsData.filter(pl => pl.id===id);
    setPlantDetails(plant[0]);
    // console.log('43 ',plantDetails.name)
    openPlantDetailsDialog(plant[0]);    
  }//displayPlantDetails  

  const openPlantDetailsDialog = (plant)=>{
    // console.log('name', plant.name)
    alert('name: '+plant.name+'\nlifeCycle: '+plant.lifeCycle+'\nimageId: '+ plant.imageId);
    // showDialog();
    return (
      <>
        {/* <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} >
            <Dialog.Title>Allan</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}
      </>
    );
  }

  const renderCatePlants = plantsData.map((plantDetails)=>{
    const plant =plantsData.filter(pl => pl.id===plantDetails.id);
    // console.log(plant[0].id,':::::',plantDetails.id, 'image:', plant[0].imageId);
    return(
      <View style={styles.vegeItem}>
        <TouchableOpacity style={styles.imgTitle} onPress={()=>displayPlantDetails(props.plant.id)}>
          <Image style={styles.tinyImage} source={{
              // uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails.imageId}@3x.jpg`,            
              uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails.imageId}@3x.jpg`,            
            }}
          />
          <Text style={styles.vegeTitle}>{props.plant.name}</Text>
        </TouchableOpacity>
        <View style={styles.quantityControls}>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={removeItems}><Text style={styles.controlsBtns}> - </Text></TouchableOpacity>
          <TouchableOpacity onPress={addItems}><Text style={styles.controlsBtns}> + </Text></TouchableOpacity>
        </View>
      </View>
    )
  })
    
  return(
    // <View style={styles.vegeItem}>
    //   {renderCatePlants}
    // </View>    
    <View style={styles.vegeItem}>   
      <TouchableOpacity style={styles.imgTitle} onPress={()=>displayPlantDetails(props.plant.id)}>
        <Image style={styles.tinyImage} source={{
            uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${props.plant.id}@3x.jpg`,            
          }}
        />
        <Text style={styles.vegeTitle}>{props.plant.name}</Text>
      </TouchableOpacity>
       {/* <VegeDetails plant={props.plant.id} plantsData={plantsData} /> */}
      <View style={styles.quantityControls}>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={removeItems}><Text style={styles.controlsBtns}> - </Text></TouchableOpacity>
        <TouchableOpacity onPress={addItems}><Text style={styles.controlsBtns}> + </Text></TouchableOpacity>
      </View>
        {/* <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} >
            <Dialog.Title>Allan</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}
    </View>
  )
}

const styles = StyleSheet.create({
  quantityControls:{
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  quantityText:{
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 2,
     borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  controlsBtns:{
    fontSize: 30,
    paddingHorizontal: 5,
  },
  vegeItem: {
    backgroundColor: '#E3E9F3',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:1,
  },
  imgTitle:{
    width:'65%',
    flexDirection: 'row',
  },
  vegeTitle:{
    fontSize: 15,
    paddingVertical: 10,
  },
  tinyImage: {
    width: 40,
    height: 40,
    margin: 5,
  },
});

export default VegeItem;