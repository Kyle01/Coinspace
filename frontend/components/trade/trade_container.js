import { connect } from 'react-redux';
import Trade from './trade';

const mapStateToProps = (state, ownProps) => ({
  coin: ownProps.match.params.coin,
  active: "buy"
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trade);
