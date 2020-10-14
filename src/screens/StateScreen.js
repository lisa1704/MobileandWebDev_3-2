import React from "react";
import { Text, View, Button, Stylesheet } from "react-native";

const StateScreen = () => {
    let counter = 0;
    return <View>
        <Text style={styles.textStyle}>{counter}</Text>
        <Button
            title="Increase"
            onPress={
                function () {
                    counter += 1;
                }
            }
            color="purple"
        />
        <Button
            title="Decrease"
            onPress={
                function () {
                    counter -= 1;
                }
            }
            color="red"
        />
    </View>
};

const styles = Stylesheet.create({
    textStyle: {
        fontSize: 40,
        color: "brown",
        fontWeight:"bold"
    }
});

export default StateScreen;