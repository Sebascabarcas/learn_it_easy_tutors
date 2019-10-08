import axios from 'axios'

function request(path, method, data, { _headers, skipLoading, skipToken }) {
  const headers = _headers || {}
  // if (localStorage.getItem('__auth_lupa')) headers.Authorization = `Token token=${JSON.parse(localStorage.getItem('__auth_lupa')).secret}`
  return axios({
    method,
    headers,
    url: path,
    baseURL: `${process.env.REACT_APP_API_URL}/`,
    data,
    skipLoading,
    skipToken,
  }).then(response => (response.status !== 404 ? response : Promise.reject(response)))
  // }).then(response => console.log(response));
}

const Requests = {
  get(
    path,
    { headers, skipLoading, skipToken } = { headers: {}, skipLoading: false, skipToken: false },
  ) {
    return request(path, 'GET', null, { _headers: headers, skipLoading, skipToken })
  },
  post(
    path,
    data,
    { headers, skipLoading, skipToken } = { headers: {}, skipLoading: false, skipToken: false },
  ) {
    return request(path, 'POST', data, { _headers: headers, skipLoading, skipToken })
  },
  put(
    path,
    data,
    { headers, skipLoading, skipToken } = { headers: {}, skipLoading: false, skipToken: false },
  ) {
    return request(path, 'PUT', data, { _headers: headers, skipLoading, skipToken })
  },
  delete(
    path,
    { data, headers, skipLoading, skipToken } = {
      data: null,
      headers: {},
      skipLoading: false,
      skipToken: false,
    },
  ) {
    return request(path, 'DELETE', data, { _headers: headers, skipLoading, skipToken })
  },
}

export default Requests
