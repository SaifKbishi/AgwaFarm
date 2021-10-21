import React, { useState, useEffect } from 'react';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { List,ListItemText} from 'react-native-paper';

const DialogContent = ({plantDetails})=>{
  return(    
    <Dialog.Content key={plantDetails.id}>
      <Image style={styles.tinyImage} source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plantDetails.imageId}@3x.jpg`,}}/>
      <Paragraph><Text style={styles.dialogText}>Life cycle: </Text>{plantDetails.lifeCycle}</Paragraph>
      <Paragraph><Text style={styles.dialogText}>Description: </Text>{plantDetails.description}</Paragraph>
      <Paragraph><Text style={styles.dialogText}>Seed To Crop: </Text>{plantDetails.seedToCrop}</Paragraph>
      <Paragraph><Text style={styles.dialogText}>Yield: </Text>{plantDetails.yield}</Paragraph>
      <Paragraph><Text style={styles.dialogText}>Nutrition facts: </Text></Paragraph>
      <List.AccordionGroup>
      {plantDetails.nutritionFacts.items.map((ntf)=>{
        return(
        <List.Accordion title={ntf.key} id={ntf.key}>
        <List.Item title="Nutrient value: " description={ntf.nutrientValue} style={styles.ntfTitle}/>
        <List.Item title="% Of RDA: " description={ntf.percentageOfRDA} style={styles.ntfTitle}/>
        </List.Accordion>  
        )
      })}
      </List.AccordionGroup>
    </Dialog.Content>    
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

export default DialogContent;