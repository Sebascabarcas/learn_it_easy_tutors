import axios from 'axios'
// import { UNAUTH_USER } from '../redux/settings/';

const setupInterceptors = store => {
  // Add a response interceptor
  // axios.interceptors.request.use(
  //   config => {
  //     // spinning start to show
  //     // UPDATE: Add this code to show global loading indicator
  //     // if (!config.skipLoading) document.body.classList.add('loading-indicator')

  //     if (localStorage.getItem('__auth_lie') && !config.skipToken) {
  //       config.headers.Authorization = `Token token=${
  //         JSON.parse(localStorage.getItem('__auth_lie')).secret
  //       }`
  //     }
  //     return config
  //   },
  //   error => Promise.reject(error),
  // )

  // axios.interceptors.response.use(
  //   response => {
  //     setTimeout(() => {
  //       document.body.classList.remove('loading-indicator')
  //     }, 2000)
  //     return response
  //   },
  //   error => {
  //     setTimeout(() => {
  //       document.body.classList.remove('loading-indicator')
  //     }, 2000)
  //     if (!error.response) {
  //       error.response = { status: 0 }
  //       return Promise.reject(error)
  //     }
  //     const { statusText } = error.response
  //     if (statusText === 'Unauthorized' || statusText === 'Sesión invalida') {
  //       // store.dispatch({ type: 'user/UNAUTH_USER' })
  //     }
  //     return Promise.reject(error)
  //   },
  // )
}

export default setupInterceptors
