import { connect } from 'react-redux';
import { login, receiveErrors} from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
