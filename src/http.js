import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

async function listArticle() {
  const res = await axios.get(API_URL + 'articles');
  return res.data;
}

const retrieveArticle = id => {
  const res = axios.get(API_URL + 'articles/' + id);
  return res.data;
};

export {listArticle, retrieveArticle};
