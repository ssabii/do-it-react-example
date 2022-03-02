import { KEY, LIFECYCLE } from 'redux-pack';
import { debounce } from '../../02/debounce';
import { hideMessage, showMessage, SHOW_NOTIFICATION } from '../actions/notificationActions';

const debounceRunner = debounce((action) => action(), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, meta } = action;

  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      store.dispatch(showMessage(error, true));
    }
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    debounceRunner(hide);
  }

  return nextRunner(action);
};
