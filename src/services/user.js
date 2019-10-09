import Requests from './requests'

export async function login(auth, { skipLoading } = {}) {
  return Requests.post('sessions/', auth, { skipLoading }).then(session => session.data)
}

export async function recoverPassword(email, { skipLoading } = {}) {
  return Requests.post('forget_password/', email, { skipLoading }).then(forget_password => forget_password.data)
}

export async function resetPassword(data, { skipLoading } = {}) {
  return Requests.delete('forget_password/', {data,  skipLoading }).then(forget_password => forget_password.data)
}

export async function register(newUser) {
  return Requests.post('users/', { user: newUser }).then(user => user.data)
}

export async function currentAccount() {
  return JSON.parse(localStorage.getItem('__auth_lie'))
}

export async function logout({ skipLoading }) {
  return Requests.delete('sessions/', { skipLoading }).then(session => session.data)
}
