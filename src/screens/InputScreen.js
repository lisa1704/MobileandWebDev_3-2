import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput, Switch } from "react-native";
import { Picker } from "@react-native-community/picker";
const InputScreen = () => {
    let [username, setusername] = useState("");
    let [isenabled, setisenabled] = useState(false);
    let [lang, setLang] = useState('english');
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
            <Picker
                mode="dropdown"
                selectedValue={lang}
                onValueChange={function (itemvalue, itemindex) {
                    setLang(itemvalue);
                }}
            >
                <Picker.Item label="English" value={"english"} />
                <Picker.Item label="Spanish" value={"spanish"} />
                <Picker.Item label="Arabic" value={"arabic"} />
                <Picker.Item label="German" value={"german"} />
            </Picker>
            <Text style={styles.textStyle}>{lang}</Text>
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
