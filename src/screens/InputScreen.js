import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";

const InputScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Input Screeb</Text>
        </View>
        );

};

const styles = StyleSheet.create({
    textStyle: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold"
    }
}
);

export default InputScreen;
