import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

interface iProps {
    todoList: ITodo[];
}
const ListTodo = (props: iProps) => { 
  const { todoList } = props;
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
            <Text key={item.id} style={styles.todo}
            >
            {item.name}
            </Text>
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