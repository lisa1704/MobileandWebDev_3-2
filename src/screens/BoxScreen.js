import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";

const createRGB = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let str = "rgb(" + red + "," + green + "," + blue+")";
    return str;
};

const BoxScreen = () => {
    let [Color, setColor] = useState("rgb(0,255,0)");
    return (
        <View>
            <Button
                title="Change color"
                onPress={
                    function () {
                        setColor(createRGB());
                        console.log(createRGB());
                    }
                }
            />
            <View style={{ width: 100, height: 100, backgroundColor: Color }} />

        </View>
    );
};
export default BoxScreen;
