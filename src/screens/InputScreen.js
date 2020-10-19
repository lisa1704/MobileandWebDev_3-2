import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput, Switch } from "react-native";

const InputScreen = () => {
    let [username, setusername] = useState("");
    let [isenabled, setisenabled] = useState(false);
    return (
        <View>
            <Text style={styles.textStyle}>{username}</Text>
            <TextInput
                placeholder="username"
                style={styles.inputStyle}
                onChangeText={function (currentInput) {
                    setusername(currentInput);
                }}
                onSubmitEditing={function () {
                    console.log(username);
                }}
                secureTextEntry={true}
            />
            <Switch
                value={isenabled}
                onValueChange={function () {
                    if (isenabled === true) {
                        setisenabled(false);
                    }
                    else {
                        setisenabled(true);
                    }
                    console.log(isenabled);
                }}
            />
        </View>
        );

};

const styles = StyleSheet.create({
    textStyle: {
        color: "red",
        fontSize: 50,
        fontWeight: "bold"
    },
    inputStyle: {
        margin: 8,
        padding: 8,
        borderColor: "green",
        borderWidth:10
    }
}
);

export default InputScreen;
