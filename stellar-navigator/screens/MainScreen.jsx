import {View, Text, StyleSheet, Pressable} from "react-native";

const MainScreen = ({navigation}) => {

    pressHandler = () => {
        navigation.navigate("Star")
    }

    return (
    <View style={styles.screenContainer}>
        <Text style={styles.text}>
            My Main Screen
        </Text>
        <Pressable onPress={pressHandler}>
            <Text>
                Go to star page
            </Text>
        </Pressable>
    </View>
    )
} 

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#000",
        // borderColor: "black",
        // borderWidth: 1
    }
})

export default MainScreen;

