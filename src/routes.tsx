import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Octicons } from '@expo/vector-icons';

import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

const { Navigator, Screen } = createBottomTabNavigator();

const Icons: any = {
    Home: {
        name: 'home',
        lib: Entypo
    },
    Statistics: {
        name: 'graph',
        lib: Octicons
    },
    News: {
        name: 'news',
        lib: Entypo
    },
    Info: {
        name: 'info-with-circle',
        lib: Entypo
    }
}

const Route: React.FC = () => {
    return (
        <Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#473F97',
                inactiveTintColor: '#AEA1E5',
                showLabel: false
            }}
            screenOptions={
                ({ route }) => ({

                    tabBarIcon: ({ size, color }) => {
                        const { lib: Icon, name } = Icons[route.name];
                        return (<Icon name={name} size={size} color={color} />);
                    }

                })
            }>
            <Screen name="Home" component={Home} />
            <Screen name="Statistics" component={Statistics} />
            <Screen name="News" component={Statistics} />
            <Screen name="Info" component={Statistics} />
        </Navigator >
    );
}

export default Route;