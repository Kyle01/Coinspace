import { connect } from 'react-redux';
import { getUserTransactions } from '../../actions/transaction_actions';
import RecentActivity from './recent_activity';

const mapStateToProps = (state, ownProps) => {
  return {
    transactions: state.entities.transactions
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTrades: () => dispatch(getUserTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentActivity);
