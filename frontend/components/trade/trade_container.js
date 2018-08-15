import { connect } from 'react-redux';
import Trade from './trade';
import { getCurrentPrice } from '../../actions/price_actions';
import { trade } from '../../actions/transaction_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    coin: ownProps.match.params.coin,
    price: state.entities.prices,
    user: state.entities.users[state.session.currentUser]
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPrice: () => dispatch(getCurrentPrice()),
  trade: (transaction) => dispatch(trade(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trade);
