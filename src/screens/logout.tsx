import * as React from 'react';
import { View, Button, Text } from "react-native";

export const Logout = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      {/* <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      /> */}
      <Text>Logout</Text>
    </View>
  );
}