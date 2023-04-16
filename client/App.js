import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Input, TextInput } from 'react-native';
const data = [];
let j = 0;
export default function App() {
  const arr = [{ name: 'לנה', age: '26 ', hobbies: 'הנדסה, מוזיקה ', id: 'Lena' , url:"https://lh5.googleusercontent.com/j4DYTMTOIPl3KMNcw7ySKPhuS0b6FXIfHpUgSlB-5etH__jly89-OfZKEfMxDRul2Ukk_suEBkv3V8e0TrpWu0TwkqQySrCjs7uj=w1405-h900-rw"  }
    , { name: 'ליהי', age: 'בדיקה', hobbies: 'היסטוריה,עיצוב', id: 'lihi' , url:'https://lh3.googleusercontent.com/OUpXULNygnY8TWAiNBxWyhW-2ui5_8vUhZR_nXsAu8vOYZh5Qyjmw9Or0_AM2oV8W_wcgu-OP_SFexbWq1tF--B9LABudIiiQjpg=w1405-h900-rw'},
  { name: 'איתמר', age: '23 ', hobbies: 'מחשבים, ספורט', id: 'Itamar', url:'https://lh4.googleusercontent.com/i1gOalyXL9WB3dVRtc58tsxCymiOkOWRfXYTZZ27r0fPMBHv5GvQ1miDlX3cA9OTnTS5UlcxjnlaJzNCTu_Q=w1405-h900-rw' },
  { name: 'מונה', age: 'בדיקה', hobbies: 'פסיכולוגיה,שפות', id: 'Mona' , url:'https://lh4.googleusercontent.com/7UXfp_S_c2K_f00tdsFjID1iMKcaXX8TOp60tySyZ-Tk9AmVi8oTEUxsw-36NcnIn84Hkfbcf9HSFUxKrE-4=w1405-h900-rw'}];
  const [outputText, setOutputText] = useState(arr[j]);
  const [InputText, setInputText] = useState('אורח');
  const clickHandler = (i) => {
    if (j == arr.length) {
      j = 0;
    }
    setOutputText(arr[j++]);
    data.push({ yesOrNo: i, name: outputText.id, nameOfAns:InputText});
    console.log(data[data.length - 1]);  
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
      <Image style={styles.Image} />
        <Text style={styles.text}>{outputText.name} </Text>
        <Text style={styles.text}>{outputText.age} </Text>
        <Text style={styles.text}>{outputText.hobbies} </Text>
    
      </View>
      <View style={styles.containerButton}>
        <Button title="כן" onPress={() => clickHandler(1)} />
      </View>
      <View style={styles.containerButton}>
        <Button title="לא" onPress={() => clickHandler(0)} />
      </View>
      <TextInput style={styles.input} onChangeText={value => setInputText(value)} placeholder='שם עונה הסקר'></TextInput>
      <Text style={styles.text}>{InputText} שלום </Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  Image:{
    marginTop:50,
    width:100,
    height:150,
 alignSelf:'center',
 
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,

  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    backgroundColor: '#333',
  },
  containerText: {
    padding:18
  },
  containerButton: {
    margin: 30
  },
});
