import React, {useState} from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const StateScreen = () => {
    let [counter, setCounter] = useState(0);
    return <View>
        <Text style={styles.textStyle}>{counter}</Text>
        <Button
            title="Increase"
            onPress={
                function () {
                    setCounter(counter + 1);
                    console.log(counter);
                }
            }
            color="purple"
        />
        <Button
            title="Decrease"
            onPress={
                function () {
                    setCounter(counter - 1);
                    console.log(counter);
                }
            }
            color="red"
        />
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: "brown",
        fontWeight:"bold"
    }
});

export default StateScreen;