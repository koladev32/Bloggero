import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderLayout from '../components/HeaderLayout';

function ArticleList() {
  return (
    <View style={styles.container}>
      <HeaderLayout text={'FEED'} />
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
