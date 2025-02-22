import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface IProps {
    title: string;
    onPress: any;
}
const MineButton = (props: IProps) => {
    const {title, onPress} = props;
    return (
        <Pressable
        style={({pressed}) => ({opacity: pressed === true ? 0.5 : 1})}
        >
        <View style = {styles.btnContainer}>
            <AntDesign 
                name="pluscircle" 
                size={30} color="black" 
            />
            <Text>My button</Text>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {},
    text: {
        textTransform: "uppercase",
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        rowGap: 10,
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: "#ccc"
    }
})

export default MineButton;