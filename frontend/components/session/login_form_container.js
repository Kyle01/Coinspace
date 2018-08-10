import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
