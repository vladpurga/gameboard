/**
 * Who Won Container
 */
import { connect } from 'react-redux';

import * as TrackScoreActions from '@redux/track-score/actions';

// The component we're mapping to
import WhoWon from './WhoWonView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  game: state.trackScore.game,
  players: state.trackScore.players,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  trackScoreSetPlayerRank: TrackScoreActions.setPlayerRank,
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoWon);
