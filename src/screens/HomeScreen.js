import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = (props) => {
    console.log(props);
    return (<View>
        <Text style={styles.textStyle}>HOME SCREEN</Text>
        <Button
            title="Go to List Screen"
            onPress={
                function () {
                    alert("Button Pressed!");
                }
            }
        />
    </View>
    );
};
const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 50,
            color: "blue",
        },

    }
);
export default HomeScreen;