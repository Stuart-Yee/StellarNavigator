import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { getSix } from "../data/fetchStars";
import { useEffect, useState } from "react";
import StarTile from "../components/StarTile";

const MainScreen = ({ navigation }) => {

    const [stars, setStars] = useState([]);

    useEffect(() => {
        getSix()
            .then(res => setStars([...res]))
            .catch(err => {
                console.log(typeof (err));
                console.log(err);
            })
    }, [])

    pressHandler = (starData, imgSource) => {
        navigation.navigate(
            "Star", 
            {
                starData: starData,
                imgSource: imgSource
            })
    }

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.text}>
                Located Stars:
            </Text>
            <View style={styles.grid}>
                {stars.map((item, idx) => {
                    const spectralClass = item.spectral_class.slice(0, 1);
                    const classes = {
                        "G": require("../assets/G-Class.png"),
                        "K": require("../assets/K-Class.png"),
                        "M": require("../assets/M-Class.png"),
                    }
                    let imgSource = null;
                    classes[spectralClass] ? imgSource = classes[spectralClass] : imgSource = require("../assets/O-Class.png");
                    return (
                        <View style={styles.gridItem} key={idx}>
                        <StarTile
                            
                            item={item}
                            pressHandler={()=>pressHandler(item, imgSource)}
                            spectralClass={spectralClass}
                            imgSource={imgSource}
                            />
                        </View>

                    )
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#999999"
    },
    text: {
        color: "#000",
        margin: 10
        // borderColor: "black",
        // borderWidth: 1
    },
    grid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    gridItem: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default MainScreen;

