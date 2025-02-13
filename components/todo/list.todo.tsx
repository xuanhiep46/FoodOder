import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface iProps {
    todoList: ITodo[];
    deleteTodo: (value: number) => void;
}
const ListTodo = (props: iProps) => { 
  const { todoList, deleteTodo} = props; //khai báo để sử dụng
  console.log(todoList)
  return (
    <>
      <FlatList    
        style={{
          marginTop: 20,
          borderColor: "red",
          borderWidth: 1
        }}
        data={todoList}
        keyExtractor={item => item.id + ""}
        renderItem = {({item}) => { 
          return (
            <TouchableOpacity>
            <Text key={item.id} style={styles.todo}
            onPress={() => deleteTodo(item.id)}
            >
            {item.name}
            </Text>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: 'pink',
        marginBottom: 20,
        padding: 15,
      },
})

export default ListTodo;