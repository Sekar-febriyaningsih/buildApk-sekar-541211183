import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Import komponen Card jika Anda ingin menggunakannya
// import { Card } from 'react-native-paper';

// Import komponen AssetExample jika Anda ingin menggunakannya
// import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/sekars.jpg')}
      />
      <Text style={styles.title}>Sekar Febiola</Text>
      <Text style={styles.subTitle}>
        Saya lahir di Singapura. 
        Saya sekolah di SMK Telkom Purwokerto jurusan RPL.
        Saya anak pertama dari lima bersaudara.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('jangan lupa pollow ig ku @vfbriee')}>
        <Text style={styles.textButton}>Contact Me</Text>
      </TouchableOpacity>
      <Text style={styles.projectTitle}>My Recent Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#CCEEBC",
    alignItems: 'center',
    marginTop: 90
  },
  title: {
    color: 'black',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 7
  },
  subTitle: {
    color: 'grey',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 210,
    height: 210,
    borderRadius: 300,
  },
   button: {
    backgroundColor: '#EF9595',
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
      textButton: {
        fontWeight: 'bold',
        color: 'white'
      },
  projectTitle: {
    color: 'black',
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 20,
  },
});