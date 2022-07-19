import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import HeaderLayout from '../components/HeaderLayout';
import {retrieveArticle} from '../http';
import {Divider} from '@rneui/base';
import PayModal from '../components/PayModal';
import Purchases from 'react-native-purchases';
import {Context} from '../../App';

function ArticleDetail({route, navigation}) {
  const {articleId} = route.params;
  const {user, setUser} = useContext(Context);

  const [article, setArticle] = React.useState(null);

  const [selectedPackage, setSelectedPackage] = React.useState({});

  React.useEffect(() => {
    Purchases.setDebugLogsEnabled(true);

    Purchases.setup('goog_JurvcuZoTfhVTxspjpEoIvDJEhd', null, false);

    const getPackages = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        if (
          offerings.current !== null &&
          offerings.current.availablePackages.length !== 0
        ) {
          setSelectedPackage(offerings.current.availablePackages[0]);
        }
      } catch (e) {
        console.error('Error getting offers', e.message);
      }
    };

    getPackages();
  }, []);

  React.useEffect(() => {
    retrieveArticle(articleId).then(res => {
      setArticle(res);
    });
  }, [articleId, user]);

  return (
    <View style={styles.container}>
      <HeaderLayout
        text={article?.title}
        hasGoback={true}
        navigation={navigation}
      />
      {article ? (
        <>
          <View style={styles.contentContainer}>
            <Text style={styles.articleAuthor}>by {article.author}</Text>
            <Text style={styles.articleDescription}>{article.description}</Text>
            <Divider />
            <Image style={styles.articleImage} source={{uri: article.image}} />
            <Divider />
            <Text>{article.content}</Text>
          </View>
          <PayModal
            navigation={navigation}
            isOpen={article.is_private && !user.has_subscribed}
            selectedPackage={selectedPackage}
          />
        </>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  articleAuthor: {
    color: '#000',
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
