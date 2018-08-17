// import { put, takeEvery } from 'redux-saga/effects';
// import { setActiveItem, startDragging, endDragging } from '../actions/component-state';
// import { LOAD_ACTIVE_ITEM } from '../types/drawer';
//
// function* workOnLoadActiveItem({ payload }) {
//   if (payload.dragging === true) {
//     yield put(setActiveItem());
//     yield put(startDragging());
//   } else if (payload.dragging === false) {
//     yield put(endDragging());
//   } else {
//     yield put(setActiveItem());
//   }
// }
//
// export default function* watchForLoadActiveItem() {
//   yield takeEvery(LOAD_ACTIVE_ITEM, workOnLoadActiveItem);
// }
