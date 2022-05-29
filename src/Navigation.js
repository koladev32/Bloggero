import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ArticleList from '../screens/ArticleList';
import ArticleDetail from '../screens/ArticleDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ArticleList" component={ArticleList} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
