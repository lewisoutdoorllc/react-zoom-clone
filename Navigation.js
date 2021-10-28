import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

function Navigation() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen
                    name='Home James'
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='Room'
                    component={MeetingRoom}
                    options={{
                        title: 'Start A New Metting',
                        headerStyle: {
                            backgroundColor: 'green',
                            // shadowOpacity: 0,
                            borderBottomWidth: 0,
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            // display: 'flex',
                        },
                        headerTintColor: 'black',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
