import { fork, all } from 'redux-saga/effects';
import templateWatcher from '@root/pages/builder/redux/sagas/templates';
import drawerWatcher from '@root/pages/builder/redux/sagas/drawer';


export default function* () {
  yield all([
    fork(templateWatcher),
    fork(drawerWatcher),
  ]);
}
