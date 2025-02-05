import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  //typeScript
  //State---
  //data-type
  const[name, setName] = useState<string>("xuanhiep"); //string --- dùng nhiều nhất

  const[age, setAge] = useState<number>(0); //number

  //null, undefined, boolean
  const test = false;

  //object---
  const[person, setPerson] = useState<({ //Kh ép kiểu vào, typeScript sẽ tự đoán luôn
    name: "xuanhiep",
    age: 20
  })>({
    name: "xuanhiep",
    age: 20
  }); 

  //array---
  const[person1, setPerson1] = useState([6, 9]); 

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <View>
        <Text style={styles.text}> {name} </Text>
        <Text style={styles.text}> {age} </Text>
        <Text style={styles.text}> {person.age} </Text>
        <Text style={styles.text}> {JSON.stringify(person1)} </Text> /* nên convert nó qua dạng string */
        <Text style={styles.text}> {JSON.stringify(person)} </Text> /*chuyển sang dang string*/ 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {}
});
