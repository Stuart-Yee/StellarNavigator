import {View, Text, StyleSheet} from "react-native"

const SystemView = (props) => {
    return(
        <View style={styles.screenContainer}>
            <Text style={styles.text}>This is a star</Text>
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

export default SystemView;