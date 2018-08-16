import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
