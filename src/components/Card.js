import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function ArticleCard(props) {
  const {id, title, description, author, image, navigation} = props;

  const nagivate = () => {
    navigation.navigate('ArticleDetail', {
      articleId: id,
    });
  };
  return (
    <TouchableOpacity onPress={nagivate} style={styles.articleContainer}>
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
    fontStyle: 'italic',
  },
  articleAuthor: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
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
