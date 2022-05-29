import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button} from '@rneui/base';

function PrivateContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a private content. You need to subscribe before continuing.
      </Text>
      <Button buttonStyle={styles.button}>Subscribe for $5 per month</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6305dc',
    borderRadius: 5,
  },
});

export default PrivateContent;
