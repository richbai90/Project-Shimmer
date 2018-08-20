import { put, takeEvery } from 'redux-saga/effects';
import { setActiveItem, startDragging, endDragging } from '../actions/draggable';
import { SELECT_ACTIVE_ITEM } from '../types/draggable';

function* workOnSelectActiveItem({ payload }) {
  if (payload.dragging === true) {
    yield put(setActiveItem(payload.itemID));
    yield put(startDragging());
  } else if (payload.dragging === false) {
    yield put(endDragging());
  } else {
    yield put(setActiveItem(payload.itemID));
  }
}

export default function* watchForSelectActiveItem() {
  yield takeEvery(SELECT_ACTIVE_ITEM, workOnSelectActiveItem);
}
