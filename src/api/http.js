// const baseUrl = 'http://129.204.76.142:8000/api/';
const baseUrl = 'http://127.0.0.1:8000/api/';


export default function ({
  method = 'GET',
  url = '',
  params = {},
  requiredToken = false,
}) {
  let fullUrl = baseUrl + url;
  const headers = new Headers();
  requiredToken && headers.append('Authorization', `Token ${localStorage.getItem('token')}`);

  const otherConfig = {};

  if (['POST', 'PATCH'].includes(method)) {
    headers.append('content-type', 'application/json');
    otherConfig.body = JSON.stringify(params);
  }

  if (method === 'GET') {
    fullUrl += '?';
    Object.keys(params).forEach((objKey) => {
      fullUrl += `${encodeURIComponent(objKey)}=${encodeURIComponent(params[objKey])}&`;
    });
    fullUrl = fullUrl.slice(0, -1);
  }

  return fetch(fullUrl, {
    ...otherConfig,
    headers,
    method,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}
