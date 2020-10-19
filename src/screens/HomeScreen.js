import React from 'react';
import { Text, StyleSheet, Button, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text style={styles.textStyle}>HOME SCREEN</Text>
            <Button
                title="Go to List Screen"
                onPress={
                    function () {
                        props.navigation.navigate("List");
                        console.log("Button Pressed!")
                    }
                }
            />
            <Button
                title="State Screen"
                onPress={
                    function () {
                        props.navigation.navigate("State");
                    }
                }

            />
            <Button

                title="Box Screen"
                onPress={
                    function () {
                        props.navigation.navigate("Box");
                    }
                }

            />
            <Button
                color="purple"
                title="Input Screen"
                onPress={
                    function () {
                        props.navigation.navigate("Input");
                    }
                }

            />
            <TouchableOpacity
                onPress={function () {
                    //alert("Image pressed");
                    console.log("image pressed!")
                }}
            >
            <Image source={{
                height: 300,
                width: 200,
                uri: 'https://picsum.photos/seed/picsum/200/300'
            }}
                />
            </TouchableOpacity>
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