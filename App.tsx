
import * as React from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Image } from 'react-native';
import { Magic } from '@magic-sdk/react-native';
import Nav from './src/navigation/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { nonempty } from 'superstruct';

const m = new Magic('pk_live_4E3DE1FC64CF769E');

// await m.auth.loginWithMagicLink({ email: 'your.email@example.com' });

export default function App() {

  const [email, setEmail] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = async () => { 
    await m.auth.loginWithMagicLink({ email: `${email}`});
    setIsLoggedIn(true)
  }

  const logout = async () => {
    await m.user.logout();
    setIsLoggedIn(false);
  };


  
  const loggedOut = () => {
    return (
    <>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.Logo} source={require("./assets/acrow-logo.png")}/> 
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text style={styles.Instructions}>login or signup</Text> */}
      
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="email"/>
      <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text>Powered 
        By</Text>
      <Image style={styles.Img} source={require("./assets/Magic.png")}/>
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}></View>
    <m.Relayer/>
    </>
    )
  }

  const Stack = createNativeStackNavigator();

  const loggedIn = () => {
    return (
      <>
        <Nav/>
        <m.Relayer/>
      </>
    )
  }

  if(!isLoggedIn) {
    return loggedOut();
  } else {
    return loggedIn();
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 300
  },
  Logo: {
    width: 300,
    height: 65
  },
  Instructions: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 10
  },
  input: {
    height: 60,
    width: 300,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingLeft: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    width: 140,
    height: 53,
    backgroundColor: "#FFA200",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 27,
    textAlign: 'center'
  },
  Img: {
    width: 74,
    height: 92,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 40
  },
})
