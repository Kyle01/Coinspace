import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
