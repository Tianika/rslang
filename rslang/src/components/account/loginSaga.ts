import { call, put, takeEvery } from 'redux-saga/effects';
import { loginFetch, loginSlice } from './loginState';
import { Signin } from './types';

// function* workLoginFetch() {
//   const login: Signin = yield call(() =>
//     fetch('https://learnwords-team17.herokuapp.com/signin', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(loginSlice.state)
//     })
//   );

//   const content = yield login.json();
//   yield put(loginFetch(content));
// }

// function* loginSaga() {
//   yield takeEvery('login/loginFetch', workLoginFetch);
// }

// export default loginSaga;
