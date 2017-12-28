/**
 * Track Score Container
 */
import { connect } from 'react-redux';

// Actions
import * as TrackScoreActions from '@redux/track-score/actions';
import * as GameStatsActions from '@redux/game-stats/actions';

// The component we're mapping to
import TrackScore from './TrackScoreView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  trackScore: TrackScoreActions.trackScore,
  gameStatsSetGame: GameStatsActions.setGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackScore);
