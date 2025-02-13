import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //State---
  const[name, setName] = useState<string>("xuanhiep");

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <View>

        <TextInput 
        onChangeText={value => setName(value)}
        // value='xuanhiep' //hard code, set cứng
        value = {name}
        //Các thuộc tính hay dùng của bàn phím---
        autoCapitalize='none' //tính năng viết hoa
        autoCorrect = {false} //tự động chỉnh chính tả
        // keyboardType='numeric' //kiểu bàn phím
        // maxLength={8} //giới hạn ký tự
        multiline={true} //đoạn văn bản, tự động xuống dòng khi người dùng viết

        style= {{
          borderColor: "violet",
          borderWidth: 1,
          padding: 10
        }} /> 
        <Text style={styles.text}> {name} </Text>
      </View>

      <Button title='Add new'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    top: 30,
  },
  text: {}
});
