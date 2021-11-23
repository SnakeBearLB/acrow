import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
// import { Main } from '../utils/programInfo';


export default function DashBoard ({ navigation }) {

  const [info, setInfo] = React.useState('');

  const handleClick = async () => {
    // const response = await Main().toString();
    // setInfo(response);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Button title='Call Program' onPress={handleClick}/>
      <Text>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  screen: {
    backgroundColor: 'white'
  }
})