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

async function getUser(userId) {
  const res = await axios.get(API_URL + 'users/' + userId);
  return res.data;
}

async function subscribeUser(userId) {
  const res = await axios.patch(
    API_URL + 'users/' + userId,
    {
      has_subscribed: true,
    },
    {
      headers: {'Content-Type': 'application/json'},
    },
  );
  return res.data;
}

export {listArticle, retrieveArticle, getUser, subscribeUser};
