import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InputTodo = () => {
    const[name, setName] = useState<string>("");

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
                    onPress={() => alert("tap me")}
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