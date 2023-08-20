import {View, Text, StyleSheet} from "react-native";

const MainScreen = (props) => {

    return (
    <View style={styles.screenContainer}>
        <Text style={styles.text}>
            My Main Screen
        </Text>
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

