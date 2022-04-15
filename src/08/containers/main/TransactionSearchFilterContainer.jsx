import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { requestTransactionList } from '../../actions/transactionPackAction';
import { setFilter } from '../../actions/searchFilterActions';

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params,
});

export default connect(mapStateToProps, { requestTransactionList, setFilter })(
  TransactionSearchFilter,
);
