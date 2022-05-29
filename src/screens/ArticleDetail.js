import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderLayout from '../components/HeaderLayout';
import PrivateContent from '../components/PrivateContent';
import {retrieveArticle} from '../http';
import {Divider} from '@rneui/base';


function ArticleDetail({route, navigation}) {
  const {articleId} = route.params;

  console.log(route.params);

  const [article, setArticle] = React.useState({});

  React.useEffect(() => {
    retrieveArticle(articleId).then(res => {
      setArticle(res);
    });
  }, []);

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
        {article.is_private ? (
          <PrivateContent />
        ) : (
          <Text>{article.content}</Text>
        )}
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
