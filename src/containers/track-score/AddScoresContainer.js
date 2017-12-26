/**
 * Add Score Container
 */
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

// The component we're mapping to
import AddScores from './AddScoresView';

// What data from the store shall we send to the component?
const selector = formValueSelector('trackScore');
const mapStateToProps = state => ({
  user: state.user,
  game: selector(state, 'game'),
  players: selector(state, 'players'),
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScores);
