import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { LOAD_TEMPLATE } from '../types/templates';
import {
  startLoadingTemplate,
  stopLoadingTemplate,
} from '../actions/templates';
import { updateComponents } from '../actions/component-state';

function* workOnLoadTemplate({ payload }) {
  console.log('working!');
  yield put(startLoadingTemplate());
  const template = (yield import('../helpers/templates'))[payload.template];
  yield put(stopLoadingTemplate());
  yield put(updateComponents({ map: template }));
}

export default function* watchForLoadTemplate() {
  yield takeEvery(LOAD_TEMPLATE, workOnLoadTemplate);
}
