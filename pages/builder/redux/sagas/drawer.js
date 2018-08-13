import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import {
  drawerFilterAction, openDrawerAction, closeDrawerAction,
} from '../actions/drawer';
import { LOAD_DRAWER_COMPONENTS } from '../types/drawer';

function* workOnLoadDrawerComponents({ payload }) {
  yield put(drawerFilterAction(payload.filter));
  if (!payload.filter || payload.filter === 'none') {
    if (payload.isOpen === true) { yield put(closeDrawerAction()); }
  } else if (payload.isOpen !== true) { yield put(openDrawerAction()); }
}

export default function* watchForLoadDrawerComponents() {
  yield takeEvery(LOAD_DRAWER_COMPONENTS, workOnLoadDrawerComponents);
}
