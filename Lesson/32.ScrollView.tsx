import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[name, setName] = useState<string>("xuanhiep");

  const[todoList, setTodoList] = useState([
    {id: 1, name: "React"},
    {id: 2, name: "React Native"},
    {id: 3, name: "JS"},
    {id: 4, name: "Java"},
    {id: 5, name: "Javascript"},
    {id: 6, name: "Php"},
    {id: 7, name: "Node"},
    {id: 8, name: "NodeJS"},
    {id: 9, name: "ChatGPT"},
    {id: 10, name: "DeepSick"},
    {id: 11, name: "Gemeni"},
    {id: 12, name: "BlackboxAI"},
    {id: 13, name: "ClaudeAI"},
  ])

  return (
    <View style={styles.container}>
      {/* <Text>Hello world</Text> */}
      <View>

        <TextInput 
        onChangeText={value => setName(value)}
        value = {name}
        autoCapitalize='none' 
        autoCorrect = {false} 
        multiline={true}

        style= {{
          borderColor: "violet",
          borderWidth: 1,
          padding: 10
        }} /> 
        <Text style={styles.text}> {name} </Text>
      </View>

      <Button 
      title='Add new' 
      color={"green"}
      onPress={() => alert("tap me")}
      />

      {/* ScrollView --- dùng khi <100 phân tử
      nếu lớn hơn thì phải dùng FlatList */}
      <ScrollView style={{marginTop: 20}}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}
            >
            {todo.name}
            </Text>
          )
        })}
      </ScrollView>
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
    marginTop: 30,
  },
  text: {},
  todo: {
    fontSize: 30,
    backgroundColor: 'pink',
    marginBottom: 20,
    padding: 15,
  },
  // text: {},
});
