import React from 'react';
import { Text, Stylesheet } from 'react-native';

const HomeScreen = () => {
    return (<Text style={hstyles.textsyle}>Hi there! I'm Lisa</Text>);
}
const hstyles = Stylesheet.create(
    {
        textsyle: {
            fontsize: 50,
            color: 'blue'
        },

    }
);
export default HomeScreen;