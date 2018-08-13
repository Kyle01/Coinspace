import { connect } from 'react-redux';
import { getCurrentPrice, getPrices } from '../../actions/price_actions'
import SmallGraph from './small_graph';

const mapStateToProps = (state, ownProps) => {
  return {
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
)(SmallGraph);
