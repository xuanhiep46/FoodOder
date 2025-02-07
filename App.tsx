import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './components/todo/input.todo'; //relative path
import ListTodo from './components/todo/list.todo';

export default function App() {
  const[todoList, setTodoList] = useState<ITodo[]>([
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

      <InputTodo/>
      <ListTodo
        todoList = {todoList}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  text: {},
  todo: {
    fontSize: 30,
    backgroundColor: 'pink',
    marginBottom: 20,
    padding: 15,
  },
});

/*
Tổng kết bài học---
1. Chia tách Component
2. Học cách code typeScrtip
*/