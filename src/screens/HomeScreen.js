import React from 'react';
import { Text, StyleSheet, Button, View, Image } from 'react-native';

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
            
            <Image source={require('./../../assets/logo.png')} />
            #Image not displaying 
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