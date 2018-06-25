//  Application root component.
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TestFairy from 'react-native-testfairy';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';

import * as FirestoreCommands from './commands/firestore';
import config from './config';
import store from './store';
import createRouter from './Router';

class App extends Component {
  componentWillMount = () => {
    TestFairy.begin(config.testFairyApiKey);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      //  If we've not got a user, we need to login. If we have a user, we
      //  can start the app on the home page.
      if (!user) {
        this.startLogin();
      } else {
        this.startHome(user);
      }
    });
  }

  startLogin = () => {
    Actions.login({ type: 'reset' });
  }

  startHome = (user) => {
    //  We've got a user. Set the analytics id, start watching firestore for
    //  data, and when we have some initial data, move to the home screen.
    firebase.analytics().setUserId(user.uid);
    FirestoreCommands
      .startWatchingFirestore(user, store.dispatch)
      .then((/* cleanupWatchers */) => {
        Actions.home({ type: 'reset' });
      });
  }

  render = () => {
    const router = createRouter(store);
    return (
      <Provider store={store}>
        {router}
      </Provider>
    );
  }
}

export default App;
