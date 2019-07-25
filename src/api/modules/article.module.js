export default {
  /**
   * 获取文章列表
   */
  getArticleList() {
    return fetch('http://127.0.0.1:8000/api/article/articles/', {
      method: 'GET',
    }).then(res => res.json());
  },

  getArticleDetail({ id }) {
    return fetch(`http://127.0.0.1:8000/api/article/articles/${id}/`, {
      method: 'GET',
    }).then(res => res.json());
  },
};
