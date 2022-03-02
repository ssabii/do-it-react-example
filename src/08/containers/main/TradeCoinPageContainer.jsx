import { connect } from 'react-redux';
import TradeCoinPage from '../../components/main/TradeCoinPage';
import { createTransaction } from '../../actions/transactionPackAction';

export default connect(null, { createTransaction })(TradeCoinPage);
