import React ,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText]= useState('second')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Text>איתמר</Text>
      <Button title="like" onPress={()=> setOutputText('hello')}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
