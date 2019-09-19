// const baseUrl = 'http://129.204.76.142:8000/api/';
const baseUrl = 'http://127.0.0.1:8000/api/';


export default function ({
  method = 'GET',
  url = '',
  params = {},
  requiredToken = false,
}) {
  const fullUrl = baseUrl + url;
  const headers = new Headers();
  requiredToken && headers.append('Authorization', `Token ${localStorage.getItem('token')}`);

  const otherConfig = {};

  if (['POST', 'PATCH'].includes(method)) {
    headers.append('content-type', 'application/json');
    otherConfig.body = JSON.stringify(params);
  }

  return fetch(fullUrl, {
    ...otherConfig,
    headers,
    method,
  }).then((res) => {
    if ([200, 201].includes(res.status)) {
      return res.json();
    }
    return res.json();
  });
}
