import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const VegeDetails = (props)=>{
// console.log('9 plantId', props.plant)
// console.log('10 plantsData', props.plantsData)

  return(    
    <View>
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
  )
}

const styles = StyleSheet.create({
 
});

export default VegeDetails;
