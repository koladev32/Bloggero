import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleDetail from './screens/ArticleDetail';
import ArticleList from './screens/ArticleList';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ArticleList"
        component={ArticleList}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ArticleDetail"
        component={ArticleDetail}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
