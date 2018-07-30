import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { LOAD_TEMPLATE } from '../types/templates';
import {
  startLoadingTemplate,
  stopLoadingTemplate,
} from '../actions/templates';
import { updateComponents } from '../actions/component-state';

function* workOnLoadTemplate({ payload }) {
  yield put(startLoadingTemplate());
  const template = (yield import('../helpers/templates'))[payload];
  yield put(stopLoadingTemplate());
  yield put(updateComponents(template));
}

export default function* watchForLoadTemplate() {
  yield takeEvery(LOAD_TEMPLATE, workOnLoadTemplate);
}
