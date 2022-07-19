import React, {createContext, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigation';
import Purchases from 'react-native-purchases';
import {getUser} from './src/http';

import {REACT_APP_GOOGLE_PLAYSTORE_REVENUECAT_KEY} from '@env';

export const Context = createContext('Unknow');

export default function App() {
  const [user, setUser] = React.useState({});
  const value = useMemo(() => ({user, setUser}), [user]);

  React.useEffect(() => {
    getUser(1).then(res => setUser(res));

    Purchases.setDebugLogsEnabled(true);

    Purchases.setup(REACT_APP_GOOGLE_PLAYSTORE_REVENUECAT_KEY);
  }, []);

  return (
    <NavigationContainer>
      <Context.Provider value={value}>
        <StackNavigator />
      </Context.Provider>
    </NavigationContainer>
  );
}
