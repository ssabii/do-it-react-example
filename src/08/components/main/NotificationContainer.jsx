import { connect } from 'react-redux';
import Notification from './Notification';

const mapStateToProps = (state) => {
  const { hasError, errorMessage } = state.transactions;
  return { hasError, errorMessage };
};

export default connect(mapStateToProps)(Notification);
