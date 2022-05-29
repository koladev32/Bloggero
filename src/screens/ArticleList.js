import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderLayout from '../components/HeaderLayout';

function ArticleList() {
  return (
    <View style={styles.container}>
      <HeaderLayout text={'FEED'} />
      <View style={styles.contentContainer}>
        <Text style={styles.todayArticleTitle}>Today articles</Text>

        <ScrollView>
          <View style={styles.articleContainer}>
            <Text style={styles.articleTitle}>
              How to build a React Native app with React Navigation
            </Text>
            <Text style={styles.articleDescription}>
              React Navigation is a navigation library for React Native that
              provides a declarative API for building and navigating a
              multi-screen application.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todayArticleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    margin: 5,
  },
  articleContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  articleDescription: {
    fontSize: 16,
  },
});

export default ArticleList;
