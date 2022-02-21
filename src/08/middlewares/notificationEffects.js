import { SET_ERROR } from '../actions/transactionActions';
import { hideMessage, showMessage, SHOW_NOTIFICATION } from '../actions/notificationActions';
import { debounce } from '../../02/debounce';

const debounceRunner = debounce((action) => action(), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;

  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    debounceRunner(hide);
  }
  return nextRunner(action);
};