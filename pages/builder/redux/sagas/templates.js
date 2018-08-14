import { put, takeEvery } from 'redux-saga/effects';
import { Fragment } from 'react';

import { LOAD_TEMPLATE } from '../types/templates';
import {
  startLoadingTemplate,
  stopLoadingTemplate,
} from '../actions/templates';
import { updateComponents } from '../actions/component-state';
import withDynamicContent from '../../helpers/withDynamicContent';

function* workOnLoadTemplate({ payload }) {
  // Notify the app that we are loading the template
  yield put(startLoadingTemplate());
  // Load the actual template
  const template = (yield import('../../helpers/templates'))[payload.template];
  // Notify the app that we have loaded the template
  yield put(stopLoadingTemplate());
  const tree = withDynamicContent(template, template.styles, true)(Fragment);
  // Update the canvas with the new template
  yield put(updateComponents({ map: template, tree }));
}

export default function* watchForLoadTemplate() {
  yield takeEvery(LOAD_TEMPLATE, workOnLoadTemplate);
}
