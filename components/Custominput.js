import * as React from 'react';
import{View, Text, Image, TextInput, Button, Linking, ScrollView} from 'react-native';


const CustomInput = (props) => {
  return(
   
    <TextInput 
      placeholder={props.placeholder}
      style={props.style}
    />
  )
}

export default CustomInput;