import {View, Text, Image, StyleSheet} from "react-native"

const SystemView = ({route}) => {
    const star = route.params.starData;

    return(
        <View style={styles.screenContainer}>
            <View style={styles.mainData}>
                <Image source={route.params.imgSource}/>
                <View style={styles.mainDataText}>
                    <Text style={styles.textW}>{star.name}</Text>
                    <Text style={styles.textW}>Spectral Class: {star.spectral_class}</Text>
                    <Text style={styles.textW}>Distance (LY): {star.distance_light_year}</Text>
                </View>
            </View>
            <View>
            <Text style={styles.textW}>Additional Data:</Text>
            <Text style={styles.text}>Constellation: {star.constellation}</Text>
            <Text style={styles.text}>Absolute Magnitude: {star.absolute_magnitude}</Text>
            <Text style={styles.text}>Apparent Magnitude (from Earth): {star.apparent_magnitude}</Text>
            <Text style={styles.text}>Declination: {star.declination}</Text>
            <Text style={styles.text}>Right Ascension: {star.right_ascension}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#000"
    },
    text: {
        color: "#33E0FF",
        // borderColor: "black",
        // borderWidth: 1
    },
    textW: {
        color: "#fff",
        // borderColor: "black",
        // borderWidth: 1
    },
    mainData: {
        width: 200,
        // borderColor: "red",
        // borderWidth: 1,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    mainDataText: {
        margin: 5
    }
})

export default SystemView;