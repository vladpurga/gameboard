/**
 * Who Played Container
 */
import { connect } from 'react-redux';

import * as TrackScoreActions from '@redux/track-score/actions';

// The component we're mapping to
import WhoPlayed from './WhoPlayedView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  game: state.trackScore.game,
  players: state.trackScore.players,
  friends: state.friends.friends,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  trackScoreAddPlayer: TrackScoreActions.addPlayer,
  trackScoreRemovePlayer: TrackScoreActions.removePlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoPlayed);
