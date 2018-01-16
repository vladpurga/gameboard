import { connect } from 'react-redux';

// Actions
import * as GameStatsActions from '@redux/game-stats/actions';
// The component we're mapping to
import History from './HistoryView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  history: state.history,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  gameStatsSetGame: GameStatsActions.setGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
