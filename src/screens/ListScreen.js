import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

function ListScreen() {
    const uni = [{ name: "BUET", },
        { name: "IUT" },
        { name: "KUET" },
        { name: "CUET" },
        { name: "RUET" },
        { name: "DUET" },
        { name: "CU" },
        {name:"DU"}

    ];
    const uni1 = "BUET";
    const uni2 = "KUET";
    const uni3 = "IUT";
    const uni4 = "RUET";
    const uni5 = "CUET";
    const uni6 = "DU";
    const uni7 = "CU";
    const uni8 = "SUST";
    return (
        <View style={s.viewStyle}>
            <FlatList
                data={uni}
                renderItem={function ({ item }) {
                    return (<Text style={styles.textStyle}>{item.name}</Text>)
                }}
            />
                     
        </View>
        );
};

const s = StyleSheet.create({
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
