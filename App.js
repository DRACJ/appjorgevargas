import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';

// Importa el logo
const logo = { uri: 'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' };

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert(
        'Iniciar sesión',
        '¡Datos enviados correctamente!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    } else {
      Alert.alert(
        'Error',
        'Por favor, ingrese su correo electrónico y contraseña.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Agrega el logo */}
      <Image source={logo} style={styles.logo} />

      <Text style={styles.titulo}>Bienvenido!</Text>
      <Text style={styles.subtitle}>Iniciar sesión</Text>

      <TextInput 
        style={styles.input}
        placeholder='Correo electrónico'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput 
        style={styles.input}
        placeholder='Contraseña'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Ingresar"
        onPress={handleLogin}
      />
      
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>¿Olvidaste tu contraseña?</Text>
        <Text style={styles.bottomText}>Registrarme</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  titulo:{
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    color: "red",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "100%",
    height: 50,
    marginBottom: 20,
    borderRadius: 35,
    backgroundColor: "#fff"
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },

  bottomText: {
    fontSize: 16,
    color: 'blue',
  },
});



