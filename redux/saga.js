import { takeEvery } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import templateWatcher from '@root/pages/builder/redux/sagas/templates';
import drawerWatcher from '@root/pages/builder/redux/sagas/drawer';


export default function* () {
  console.log('watching');
  yield [
    fork(templateWatcher),
    fork(drawerWatcher),
  ];
}
