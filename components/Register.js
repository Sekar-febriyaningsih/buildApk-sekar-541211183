import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Linking,
  StyleSheet,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate('Login'); // Ganti 'Login' dengan nama halaman login Anda
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/telkom.png')}
      />
      <Text style={styles.title}>Welcome,</Text>
      <Text style={styles.subtitle}>Silahkan daftar terlebih dahulu...</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.inputField}
      />
      <TextInput
        placeholder="Username"
        style={styles.inputField}
      />
      <TextInput
        placeholder="Password"
        style={styles.inputField}
      />
      <TextInput
        placeholder="Ulangi Password"
        style={styles.inputField}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Daftar"
          color="black"
         onPress={navigateToLogin}
        />
      </View>
      <Text style={styles.loginText}>
        Sudah punya akun?{' '}
        <Text style={styles.loginButton} onPress={navigateToLogin}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 90,
    marginTop: 120,
    marginBottom: 20,
    marginLeft: 20,
  },
  title: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    color: 'black',
    marginBottom: 5,
  },
  subtitle: {
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 20,
    fontWeight: 'medium',
    fontSize: 15,
    textAlign: 'left',
    color: '#808080',
  },
  inputField: {
    borderWidth: 2,
    margin: 20,
    marginTop: -5,
    textAlign: 'left',
    color: 'black',
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    padding: 80,
    marginTop: -60,
  },
  loginText: {
    marginTop: -90,
    padding: 20,
    fontWeight: 'medium',
    fontSize: 15,
    textAlign: 'center',
    color: '#808080',
  },
  loginButton: {
    color: '#72a4d4',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
