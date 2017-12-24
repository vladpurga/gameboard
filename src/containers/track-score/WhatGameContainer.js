/**
 * Sign Up Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// The component we're mapping to
import WhatGame from './WhatGameView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
  initialValues: {
    game: 'Grifters',
    players: [{
      id: 1,
      name: 'Dave',
      rank: null,
    }, {
      id: 2,
      name: 'Sarah',
      rank: null,
    }],
  },
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WhatGame);
