import http from '@/api/http';

export default {
  /**
   * 获取评论
   * @param {*} params
   */
  getComments(params) {
    return http({
      url: 'comment/comments/',
      method: 'GET',
      params,
    });
  },
  /**
   * 回复文章、评论
   * @param {*} params
   */
  replyArticle(params) {
    return http({
      url: 'comment/comments/',
      requiredToken: true,
      method: 'POST',
      params,
    });
  },
};
