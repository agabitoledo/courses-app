import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/screens/Login';
import ScreenTest from './src/screens/ScreenTest';
import { AuthContextProvider } from './src/context/AuthContextProvider';
import Home from './src/screens/Home';
import Admin from './src/screens/Admin';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerShow: false
            }
          }
          initialRouteName='Admin'
        >
          <Stack.Screen
            name='Home'
            component={Home}
            navigation
          />

<Stack.Screen
            name='Admin'
            component={Admin}
            navigation
          />
          <Stack.Screen
            name='Login'
            component={Login}
            navigation
          />

          <Stack.Screen
            name='Testes'
            component={ScreenTest}
            navigation
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
