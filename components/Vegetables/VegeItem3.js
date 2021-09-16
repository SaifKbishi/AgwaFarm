import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { List,ListItemText} from 'react-native-paper';
import VegeDetails from './VegeDetails';
import DialogContent from '../DialogContent/DialogContent'

const VegeItem3 = ({category, plantDetails5})=>{
  const [quantity, setQuantity] = useState(0);
  const [plantsData, setPlantsData] = useState([]);  
  const [plantDetails, setPlantDetails] = useState();
  const [idForDialog, setIdForDialog] = useState('');
  const [selectedVege, setSelectedVege] = useState(-1);

  // const [ plantsData, setPlantsData, plantDetails, setPlantDetails, idForDialog, setIdForDialog] = useState();
  const [visible, setVisible] = useState(false);
  const doShowDialog = () => setVisible(!visible); 
  const addItems = ()=>setQuantity(prevCount => prevCount + 1 );
  const removeItems = ()=>{ quantity > 0 ? setQuantity(prevCount => prevCount - 1 ) : setQuantity(0);}
  

  const displayPlantDetails = (id, index)=>{    
    console.log(id);
    setIdForDialog(id);
    doShowDialog();    
  }//displayPlantDetails  
  //  <TouchableOpacity style={styles.imgTitle} onPress={()=>displayPlantDetails(plantDetails5.plantId)}>
  return(   
    <>
      <View style={styles.vegeItem} key={plantDetails5.plantId}>        
        <TouchableOpacity style={styles.imgTitle} onPress={()=>doShowDialog()}>
          <Image style={styles.tinyImage} source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails5.plantImageId}@3x.jpg`,}}/>
          <Text style={styles.vegeTitle}>{plantDetails5.plantName}</Text>
        </TouchableOpacity>

        <View style={styles.quantityControls}>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={removeItems}><Text style={styles.controlsBtns}> - </Text></TouchableOpacity>
          <TouchableOpacity onPress={addItems}><Text style={styles.controlsBtns}> + </Text></TouchableOpacity>
        </View>

        <Portal>
          <Dialog visible={visible} onDismiss={doShowDialog} style={styles.dialog}>
            <Dialog.Title>{plantDetails5.plantName}</Dialog.Title>
            <DialogContent plantDetails={plantDetails5} key={plantDetails5.plantId}/>       
            <Dialog.Actions>
              <Button onPress={doShowDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  ntfText:{
    fontSize: 12,
    justifyContent: "flex-start",
    alignItems:'flex-start',
  },
  ntfTitle:{
    fontSize: 12,
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
    paddingTop:5,
    paddingHorizontal: 15,
    borderColor: '#47AB48',
    marginVertical: 3,
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
    borderColor: '#47AB48',
    borderWidth: 1,
  },
});

export default VegeItem3;