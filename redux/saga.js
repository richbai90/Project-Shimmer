import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import templateWatcher from '@root/pages/builder/redux/sagas/templates';

function* workTest() {
  yield put({ type: 'TEST_DONE', payload: { data: 'done' } });
}

function* watchTest() {
  yield takeEvery('TEST', workTest);
}

export default function* () {
  yield [templateWatcher];
}
