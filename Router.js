import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

import Home from './src/components/Home';
import Page from './src/components/Page';

function Router() {
  return (
      <NavigationContainer>

        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: { backgroundColor: 'red' }
          }}
        >

        <Tab.Screen name="Home" component={Home} />

        <Tab.Screen name="Page" component={Page} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}

export default Router;