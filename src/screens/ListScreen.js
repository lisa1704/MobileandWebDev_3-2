import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

function ListScreen() {
    const uni1 = "BUET";
    const uni2 = "KUET";
    const uni3 = "IUT";
    const uni4 = "RUET";
    const uni5 = "CUET";
    const uni6 = "DU";
    const uni7 = "CU";
    const uni8 = "SUST";
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{uni1}</Text>
            <Text style={styles.textStyle}>{uni2}</Text>
            <Text style={styles.textStyle}>{uni3}</Text>
            <Text style={styles.textStyle}>{uni4}</Text>
            <Text style={styles.textStyle}>{uni5}</Text>
            <Text style={styles.textStyle}>{uni6}</Text>
            <Text style={styles.textStyle}>{uni7}</Text>
            <Text style={styles.textStyle}>{uni8}</Text>
        </View>
        );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'blue',
        marginVertical:30,
    },
    viewStyle: {
        backgroundColor: "light-yellow",
        borderColor: "red",
        borderWidth:5,
    },

});

export default ListScreen;
