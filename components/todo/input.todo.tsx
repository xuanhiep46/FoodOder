import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

interface IProps {
    addTodo: (value: string) => void;
}

const InputTodo = (props: IProps) => {
    const {addTodo} = props;
    const[name, setName] = useState<string>("");

    const handleAddNewTodo = () => {
        //validate
        // if (!name) {
        //     alert("Empty todo");
        //     return; //dừng lại và không thực thi lệnh ở bên dưới ('addTodo', 'setName')
        // }
        if (!name) {
            Alert.alert(
                "Thông tin không hợp lệ", //title
                "Tiêu đề không được để trống", //content
                [   
                    //Nút Cancel---
                    // {
                    //   text: 'Cancel',
                    //   onPress: () => console.log('Cancel Pressed'),
                    //   style: 'cancel',
                    // },

                    //Nút Okey---
                    {text: 'OK cậu ơi', onPress: () => console.log('OK Pressed')},
                  ]
            )
            return; 
        }
        addTodo(name); 
        setName("");
    }
    return (
        // fragment
        <>
            <View>
                <TextInput 
                    onChangeText={value => setName(value)}
                    value = {name}
                    autoCapitalize='none' 
                    autoCorrect = {false} 
                    multiline={true}
                    style= {styles.todoInput} 
                /> 

                <Button 
                    title='Add new' 
                    onPress={handleAddNewTodo} 
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 80,
    }
})

export default InputTodo;