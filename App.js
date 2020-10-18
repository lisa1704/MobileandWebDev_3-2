import React from 'react';
//import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import StateScreen from './src/screens/StateScreen';
import BoxScreen from './src/screens/BoxScreen';
import InputScreen from './src/screens/InputScreen';

const stack = createStackNavigator();

function App() {
    return (
        < NavigationContainer >
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="List" component={ListScreen} />
                <stack.Screen name="State" component={StateScreen} />
                <stack.Screen name="Box" component={BoxScreen} />
                <stack.Screen name="Input" component={InputScreen}/>
            </stack.Navigator>
        </NavigationContainer >     
    );
}
export default App;

