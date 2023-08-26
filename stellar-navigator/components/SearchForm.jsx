import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { getBySearch } from "../data/fetchStars";

const SearchForm = ({hide, setStars}) => {

    const [lightYear, setLightYear] = useState("");
    const [name, setName] = useState("");

    const searchHandler = () => {
        getBySearch(lightYear, name)
            .then(res => {
                console.log(res);
                setStars(res);
                setLightYear("");
                setName("");
                setTimeout(hide, 1000);
                // hide();

            })
            .catch(err => console.log(err));

    }

    return (
        <View style={styles.container}>
            <View style={styles.formGroup}>
                <Text>
                    Max Distance (Lightyears):
                </Text>
                <TextInput
                    onChangeText={(data) => setLightYear(data)}
                    value={lightYear}
                    keyboardType='numeric'
                    style={styles.inputBox}
                />
            </View>
            <View style={styles.formGroup}>
                <Text>
                    Star Name:
                </Text>
                <TextInput
                    onChangeText={(data) => setName(data)}
                    value={name}
                    style={styles.inputBox}
                />
            </View>
            <View style={styles.buttonRow}>
            <Button
                onPress={searchHandler}
                title="Search Stars"
                style={styles.button}
            />
            <Button
                onPress={hide}
                title="Cancel"
                style={styles.button}
            />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#999999",
        justifyContent: "center",
    },
    formGroup: {
        flexDirection: "row",
        margin: 10,
        alignItems: "stretch"
    },
    button: {
        margin: 10
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    inputBox :{
        flex: 1,
        borderColor: "#fff",
        borderWidth: 1
    }
})

export default SearchForm