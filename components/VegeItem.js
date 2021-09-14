import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import VegeDetails from './VegeDetails';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { List,ListItemText} from 'react-native-paper';

const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

const VegeItem = (props)=>{
  // console.log('props: ', props.category);
  console.log(props.fullPlantData)
  const [quantity, setQuantity] = useState(0);
  const [plantsData, setPlantsData] = useState([]);  
  const [plantDetails, setPlantDetails] = useState();
  // const [plant, setPlant] = useState('');

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const plants =[];
  const addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  const removeItems = ()=>{
    if(quantity > 0){
      setQuantity(prevCount => prevCount - 1 );
    }else{
      setQuantity(0);
    }    
  }

  const displayPlantDetails = (id)=>{
    console.log(id)
       showDialog();
    // openPlantDetailsDialog(id);
  }//displayPlantDetails  

  const openPlantDetailsDialog = (plant)=>{
    console.log('name', plant)
    // alert('name: '+plant.name+'\nlifeCycle: '+plant.lifeCycle+'\nimageId: '+ plant.imageId);
    showDialog();
    return (
      <>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} >
            <Dialog.Title>Allan</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </>
    );
  }

  // const renderCatePlants =()=>{
    
    props.fullPlantData.forEach((plantDetails)=>{    
    if(plantDetails.categoryId === props.category) {
      // console.log(plantDetails.plantName)
      plants.push(      
        // <View><Text style={styles.vegeTitle}>jdjdjdslkand</Text></View> 
        <View style={styles.vegeItem}>
          <TouchableOpacity style={styles.imgTitle} onPress={()=>displayPlantDetails(plantDetails.plantId)}>
            <Image style={styles.tinyImage} source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails.plantImageId}@3x.jpg`,}}/>
            <Text style={styles.vegeTitle}>{plantDetails.plantName}</Text>
          </TouchableOpacity>
          {/* <View style={styles.quantityControls}> */}
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={removeItems}><Text style={styles.controlsBtns}> - </Text></TouchableOpacity>
            <TouchableOpacity onPress={addItems}><Text style={styles.controlsBtns}> + </Text></TouchableOpacity>
          {/* </View> */}
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
              <Dialog.Title>{plantDetails.plantName}</Dialog.Title>
              <Dialog.Content>
              <Image style={styles.tinyImage} source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails.plantImageId}@3x.jpg`,}}/>
                <Paragraph><Text style={styles.dialogText}>Life cycle: </Text>{plantDetails.plantLifeCycle}</Paragraph>
                <Paragraph><Text style={styles.dialogText}>Description: </Text>{plantDetails.plantDescription}</Paragraph>
                <Paragraph><Text style={styles.dialogText}>Seed To Crop: </Text>{plantDetails.plantSeedToCrop}</Paragraph>
                <Paragraph><Text style={styles.dialogText}>Yield: </Text>{plantDetails.plantYield}</Paragraph>
                {/* <Paragraph><Text style={styles.dialogText}>Nutrition facts: </Text>{plantDetails.plantNutritionFacts}</Paragraph> */}
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>      
      )}
    })
  // }
//  console.log('33',plants);
  return(
    <View style={styles.vegeItem}>
      {/* {renderCatePlants} */}
      {plants}
    </View>    
  )
}

const styles = StyleSheet.create({
  dialogText:{
    fontSize: 15,
    fontWeight: 'bold'
  },
  dialog:{
    height:600,
  },
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
    borderRadius: 5,
  },
});

export default VegeItem;