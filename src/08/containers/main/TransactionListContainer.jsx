import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
import { requestTransactionList } from '../../actions/transactionPackAction';
import {
  transactionListLoadingStateSelector,
  transactionListSelector,
} from '../../selectors/transactionSelector';

const mapStateToProps = (state) => {
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state),
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
