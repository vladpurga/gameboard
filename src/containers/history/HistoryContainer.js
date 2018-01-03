import { connect } from 'react-redux';

// The component we're mapping to
import History from './HistoryView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  history: state.history,
});

// Any actions to map to the component?
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
