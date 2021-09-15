import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { List,ListItemText} from 'react-native-paper';
import axios from 'axios';
import VegeDetails from './VegeDetails';

const plantsURL = 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json';

const VegeItem = (props)=>{
  // console.log('props: ', props.category);
  // console.log(props.fullPlantData)
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

    props.fullPlantData.forEach((plantDetails)=>{    
    if(plantDetails.categoryId === props.category) {
      // console.log(plantDetails.plantName)
      plants.push(
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
                <Paragraph><Text style={styles.dialogText}>Nutrition facts: </Text></Paragraph>
                <List.AccordionGroup>
                {plantDetails.plantNutritionFacts.map((ntf)=>{
                  return(
                  <List.Accordion title={ntf.key} id={ntf.key}>
                  <List.Item title="Nutrient value: " description={ntf.nutrientValue} style={styles.ntfTitle}/>
                  <List.Item title="% Of RDA: " description={ntf.percentageOfRDA} style={styles.ntfTitle}/>
                  </List.Accordion>  
                  )
                })}
                </List.AccordionGroup>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>    
      )}
    })

  return(
    <>
      {/* {renderCatePlants} */}
      {plants}
    </>    
  )
}
const styles = StyleSheet.create({
  ntfText:{
    fontSize: 15,
    justifyContent: "flex-start",
    alignItems:'flex-start',
  },
  ntfTitle:{
    fontSize: 15,
    height:50,
    justifyContent: "flex-start",
    alignItems:'flex-start',
    backgroundColor:'#F0FFF6',
  },
  dialogText:{
    fontSize: 15,
    fontWeight: 'bold'
  },
  dialog:{
    top:15,
    flex: 1,
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