import { connect } from 'react-redux';

// The component we're mapping to
import GameStats from './GameStatsView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  gameStats: state.gameStats,
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStats);
