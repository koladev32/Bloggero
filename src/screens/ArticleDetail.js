import { Divider } from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderLayout from '../components/HeaderLayout';
import {retrieveArticle} from '../http';

function ArticleDetail({route, navigation}) {
  const {articleId} = route.params;

  const [article, setArticle] = React.useState({});

  React.useEffect(() => {
    retrieveArticle(articleId).then(res => {
      setArticle(res);
    });
  }, [articleId]);

  return (
    <View style={styles.container}>
      <HeaderLayout
        text={article.title}
        hasGoback={true}
        navigation={navigation}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.articleAuthor}>by {article.author}</Text>
        <Text style={styles.articleDescription}>{article.description}</Text>
        <Divider />
        <Image style={styles.articleImage} source={{uri: article.image}} />
        <Divider />
        <Text style={styles.articleContent}>{article.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  articleAuthor: {
    color: '#6305dc',
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    margin: 5,
  },
  articleDescription: {
    padding: 10,
    fontStyle: 'italic',
  },
  articleImage: {
    width: '70%',
    height: 200,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  articleContent: {
    padding: 10,
  },
});

export default ArticleDetail;
