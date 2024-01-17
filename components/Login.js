import * as React from 'react';
import{View, Text, Image, TextInput, Button, Linking, ScrollView} from 'react-native';
import CustomBtn from ""
import CustomInput from "./Custominput"

const LoginScreen = ({navigation}) => {

      const onPressRegister = () => {
        navigation.navigate("login")
      }

  return(
    <View style={{backgroundColor:'tan'}}>
    <Image 
        style={{width:200, height:90, borderRadius:0, marginTop:120,marginBottom:20,marginLeft:65}}
        source={require('../assets/telkom.png')}   
    />
    <Text style={{marginLeft:20,fontWeight:'bold', fontSize:30,textAlign:'left', color:'black',marginBottom:5}}>
      Allo!
    </Text>
    <Text style={{marginLeft:20,marginTop:0,marginBottom:20,fontWeight:'medium', fontSize:15,textAlign:'left', color:'#000000'}}>
      welcome back!
    </Text>  
    <CustomInput placeholder='Username' style={{borderWidth: 2,margin: 20,marginTop: -5,textAlign: 'left',color: 'black',borderColor: 'gray',backgroundColor: 'white',padding: 15,borderRadius: 10,}} />

    <CustomInput placeholder='Password' style={{borderWidth: 2,margin: 20,marginTop: -5,textAlign: 'left',color: 'black',borderColor: 'gray',backgroundColor: 'white',padding: 15,borderRadius: 10,}} /> 

    <Text style={{marginTop:-20,padding:20,fontWeight:'medium', fontSize:15,textAlign:'right', color:'#000000'}}>
      Forgot Pasword?
    </Text>
    
      <View style={{ padding: 90}}>
        <Button
          title="Login"
          color="green"
          onPress={() => navigation.navigate('Portofolio')}
        />
        <View style={{ marginTop:20}}>
        <Button
          title="Register"
          color="green"
          onPress={() => navigation.navigate('Register')}
        />
        </View>
      </View>
      <Text
        style={{
          marginTop: -70,
          padding: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'center',
          color: '#000000',
        }}>
        Belum punya akun?{' '}
        <Text style={{ color: '#000000', fontWeight: 'Bold' }}>
          Daftar Sekarang!
        </Text>
      </Text>
  </View>
  )
}

export default LoginScreen;