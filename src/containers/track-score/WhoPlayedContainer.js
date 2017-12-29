/**
 * Who Played Container
 */
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

// The component we're mapping to
import WhoPlayed from './WhoPlayedView';

// What data from the store shall we send to the component?
const selector = formValueSelector('trackScore');
const mapStateToProps = state => ({
  user: state.user,
  game: selector(state, 'game'),
  initialValues: {
    players: [{
      id: 1,
      name: 'Player 1',
    }, {
      id: 2,
      name: 'Player 2',
    }],
  },
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoPlayed);