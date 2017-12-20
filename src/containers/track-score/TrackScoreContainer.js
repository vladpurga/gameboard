/**
 * Track Score Container
 */
import { connect } from 'react-redux';

// The component we're mapping to
import TrackScore from './TrackScoreView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackScore);
