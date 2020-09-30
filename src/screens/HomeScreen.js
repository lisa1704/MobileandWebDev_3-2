import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (<Text style={styles.textStyle}>Hi there! I'm Lisa</Text>);
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