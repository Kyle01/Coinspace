import { connect } from 'react-redux';
import { getCurrentPrice, getPrices } from '../../actions/price_actions'
import CoinSum from './coin_sum';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.currentUser],
    coin: ownProps.match.params.coin,
    price: state.entities.prices
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPrice: () => dispatch(getCurrentPrice()),
  fetchRange: duration => dispatch(getPrices(duration))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinSum);
