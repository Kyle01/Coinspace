import { connect } from 'react-redux';
import PortfolioSum from './portfolio_sum';
import { getCurrentPrice } from '../../actions/price_actions';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    user: state.entities.users[state.session.currentUser],
    price: state.entities.prices
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPrice: () => dispatch(getCurrentPrice()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioSum);
