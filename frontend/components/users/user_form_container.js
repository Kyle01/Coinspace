import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
