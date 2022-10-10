import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyDrawer from './MyDrawer';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
