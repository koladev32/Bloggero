import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '@rneui/base';

function ArticleList() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#6305dc"
        barStyle="default"
        centerComponent={{
          text: 'HOME',
          style: {color: '#fff'},
        }}
        centerContainerStyle={{}}
        placement="center"
        statusBarProps={{}}
      />
      <Text>ArticleList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ArticleList;
