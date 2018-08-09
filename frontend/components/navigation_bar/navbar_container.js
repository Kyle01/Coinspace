import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavbarFeatures from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {currentUser: state.entities.users[state.session.currentUser]};
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarFeatures);
