import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigation';
import Purchases from 'react-native-purchases';

export default function App() {
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    Purchases.setDebugLogsEnabled(true);

    Purchases.setup('goog_JurvcuZoTfhVTxspjpEoIvDJEhd', null, false);

    const getPackages = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        console.log(offerings);
        if (
          offerings.current !== null &&
          offerings.current.availablePackages.length !== 0
        ) {
          setPackages(offerings.current.availablePackages);
        }
      } catch (e) {
        console.error('Error getting offers', e.message);
      }
    };

    getPackages();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
