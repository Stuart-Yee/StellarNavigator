import { View, Pressable, Text, StyleSheet, ImageBackground } from "react-native"

const StarTile = ({ pressHandler, item, imgSource }) => {

    
    return (
        <View style={styles.outerContainer}>
            <Pressable
                onPress={pressHandler}
            >
                <ImageBackground
                    source={imgSource}
                    style={styles.imgBack}
                >
                    <Text style={styles.tileText}>
                        {item.name}
                    </Text>
                    <Text style={styles.tileText}>
                        Distance: {item.distance_light_year} LY
                    </Text>
                    
                </ImageBackground>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        outerContainer: {
            borderRadius: 8,
            overflow: "hidden",
            borderColor: "black",
            borderWidth: 1,
            margin: 16,
            elevation: 10
        },
        imgBack: {
            width: 150,
            height: 150,
            justifyContent: "center",
            alignItemsItems: "center"
        },
        tileText: {
            // borderColor: "blue",
            // borderWidth: 1,
            textAlign: "center"
        }
    }
)

export default StarTile