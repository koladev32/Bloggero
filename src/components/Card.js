import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function ArticleCard(props) {
  const {title, description, author, image} = props;
  return (
    <TouchableOpacity style={styles.articleContainer}>
      <View style={styles.articleSubContainer}>
        <Image style={styles.articleImage} source={{uri: image}} />
        <View style={styles.articleContentContainer}>
          <Text style={styles.articleTitle}>{title}</Text>
          <Text style={styles.articleAuthor}> by {author}</Text>
          <Text style={styles.articleDescription}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  articleContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  articleDescription: {
    paddingTop: 5,
  },
  articleAuthor: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#6305dc',
  },
  articleImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  articleSubContainer: {
    flexDirection: 'row',
  },
  articleContentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ArticleCard;
