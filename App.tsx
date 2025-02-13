import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo'; //relative path
import ListTodo from './components/todo/list.todo';

export default function App() {
  const[todoList, setTodoList] = useState<ITodo[]>([])

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

  const addTodo = (text: string) => {
    const todo = {id: randomInteger(1, 1000000), name: text} 
    setTodoList([...todoList, todo]) 
  }

  return (
    <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}> {/* Đóng khi click ra ngoài */}
        <View style={styles.container}>
        <InputTodo
        addTodo = {addTodo} 
        />
        <ListTodo
          todoList = {todoList}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 60, color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50
  },
});

/*
Tổng kết bài học---
1. Trang trí phần thông báo Aleart
2. 
*/