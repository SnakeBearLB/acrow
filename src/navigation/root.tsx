import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoard from '../screens/dashboard';
import { Logout } from '../screens/logout';


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Root() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen  
        name="Dashboard" 
        component={DashBoard} />
        <Drawer.Screen name="Logout" component={Logout}/>
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create ({
  screen: {
    backgroundColor: 'white'
  }
})