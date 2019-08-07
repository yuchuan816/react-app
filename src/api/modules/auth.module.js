import http from '@/api/http';

export default {
  /**
   * 登录
   */
  login(params) {
    return http({
      url: 'login/',
      method: 'POST',
      params,
    });
  },

  register(params) {
    return http({
      url: 'user/users/',
      method: 'POST',
      params,
    });
  },
};
