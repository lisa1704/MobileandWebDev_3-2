import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View>
            <Button
                title="Change color"
                onPress={
                    function () {

                    }
                }
            />
            <View style={{ width: 100, height: 100, backgroundColor: "rgb(0,255,0)" }} />

        </View>
    );
};
export default BoxScreen;
