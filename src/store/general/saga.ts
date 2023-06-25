import {showMessage} from '@components/common/ToastMessage';
import {_onComplete} from '@store/actions';
import {call, put} from 'redux-saga/effects';

const OPTION = {title: null, message: null, isToast: true, callback: null};

export const safe = (saga: any, config?: any) =>
  function* (action: any) {
    const CONFIG = {...OPTION, ...config};
    try {
      yield call(saga, action);
    } catch (error) {
      __DEV__ && console.log(error);
      if (CONFIG.message) {
        showMessage({type: 'error', message: CONFIG.message});
      } else {
        CONFIG.isToast && showMessage({type: 'error', message: String(error)});
      }
      CONFIG.callback && CONFIG.callback();
    } finally {
      yield put({type: _onComplete(action?.type)});
    }
  };
