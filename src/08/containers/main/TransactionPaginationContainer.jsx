import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import { requestTransactionList } from '../../actions/transactionPackAction';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelector';

const mapStateToProps = (state) => {
  const { pagination, ids } = state.transactions;
  const { number, size } = pagination;

  return {
    searchParams: state.searchFilter.params,
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading: transactionListLoadingStateSelector(state),
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
