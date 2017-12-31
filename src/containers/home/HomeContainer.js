import { connect } from 'react-redux';

// Actions
import * as LoginActions from '@redux/login/actions';

// The component we're mapping to
import HomeView from './HomeView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
  googleLogin: LoginActions.googleLogin,
  logout: LoginActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
