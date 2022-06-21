import React from "react";
import Main from "./screens/Main";
import FullInfo from "./screens/FullInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options = {{
                    title: 'Головна сторінка',
                    headerStyle: {backgroundColor:'#1b9d3d'},
                    headerTitleStyle: {fontWeight: '300'}
                }}
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options = {{
                    title: 'Стаття',
                    headerStyle: {backgroundColor:'#1b9d3d'},
                    headerTitleStyle: {fontWeight: '300'}
                }}
                />
        </Stack.Navigator>
    </NavigationContainer>
}