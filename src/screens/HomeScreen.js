import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = () => {
    return (<View>
        <Text style={styles.textStyle}>Hi there! I'm Lisa</Text>
        <Button
            title="Go to List Screen"
            onPress={
                function () {
                    console.log("Button Pressed!");
                }
            }
        />
    </View>
    );
}
const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 50,
            color: "blue",
        },

    },
);
export default HomeScreen;