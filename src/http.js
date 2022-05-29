import axios from 'axios';

const API_URL = 'https://bloggero-server.herokuapp.com/';

async function listArticle() {
  const res = await axios.get(API_URL + 'articles/');
  return res.data;
}

async function retrieveArticle(articleId) {
  const res = await axios.get(API_URL + 'articles/' + articleId);
  return res.data;
}

export {listArticle, retrieveArticle};
