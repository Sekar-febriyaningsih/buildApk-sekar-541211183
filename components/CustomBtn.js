import * as React from 'react';
import{View, Text, Image, TextInput, Button, Linking, ScrollView} from 'react-native';


const CustomBtn = (props) => {
  return(
   
        <Button
          title={props.title}
          color={props.color}
          onPress={props.onPress}
        />
      
  )
}

export default CustomBtn;