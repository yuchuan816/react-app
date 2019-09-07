import http from '@/api/http';

export default {
  /**
   * 获取文章列表
   */
  getArticleList() {
    return http({
      url: 'article/articles/',
      method: 'GET',
    });
  },

  /**
   * 获取单个文章详情
   * @param {*} id
   */
  getArticleDetail(id) {
    return http({
      url: `article/articles/${id}/`,
      method: 'GET',
    });
  },

  /**
   * 添加文章
   * @param {*} id
   * @param {*} params
   */
  addArticle(params) {
    return http({
      url: 'article/articles/',
      method: 'POST',
      params,
    });
  },

  /**
   * 编辑文章
   * @param {*} id
   * @param {*} params
   */
  editArticle(id, params) {
    return http({
      url: `article/articles/${id}/`,
      method: 'PATCH',
      params,
    });
  },
};
