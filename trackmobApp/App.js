import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Create from './src/pages/Create';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{
            headerTitle: 'Cadastro',
            alignItems: 'center',
            elevation: 4,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
