
const baseUrl = 'http://129.204.76.142:8000/api/';

export default function ({ method = 'GET', url = '', params = {} }) {
  const fullUrl = baseUrl + url;
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
  const otherConfig = {};

  if (['POST', 'PATCH'].includes(method)) {
    headers.append('content-type', 'application/json');
    otherConfig.body = JSON.stringify(params);
  }

  return fetch(fullUrl, {
    ...otherConfig,
    headers,
    method,
  }).then((res) => res.json());
}
