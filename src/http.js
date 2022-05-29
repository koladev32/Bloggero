import axios from 'axios';

const API_URL = 'https://bloggero-server.herokuapp.com/';

async function listArticle() {
  const res = await axios.get(API_URL + 'articles/');
  return res.data;
}

const retrieveArticle = id => {
  const res = axios.get(API_URL + 'articles/' + id);
  return res.data;
};

export {listArticle, retrieveArticle};
