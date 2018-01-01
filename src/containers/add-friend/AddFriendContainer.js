import { connect } from 'react-redux';

import * as FriendsActions from '@redux/friends/actions';
import AddFriend from './AddFriendView';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  addFriend: FriendsActions.addFriend,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);
