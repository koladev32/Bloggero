import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderLayout from '../components/HeaderLayout';
import {listArticle} from '../http';
import ArticleCard from '../components/Card';
import {Divider} from '@rneui/themed';

function ArticleList({route, navigation}) {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    listArticle().then(res => setArticles(res));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderLayout text={'FEED'} />
      <View style={styles.contentContainer}>
        <Text style={styles.todayArticleTitle}>Today's article</Text>
        <Divider />
        <ScrollView>
          {articles.map((article, index) => {
            return (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                author={article.author}
                image={article.image}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  todayArticleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  contentContainer: {
    flex: 1,
    margin: 5,
  },
});

export default ArticleList;
