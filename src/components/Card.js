import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function ArticleCard(props) {
  const {title, description, author, image} = props;
  return (
    <View style={styles.articleContainer}>
      <Text style={styles.articleTitle}>{title}</Text>
      <Text style={styles.articleAuthor}>{author}</Text>
      <Image style={styles.articleImage} source={{uri: image}} />
      <Text style={styles.articleDescription}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  articleAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});

export default ArticleCard;
