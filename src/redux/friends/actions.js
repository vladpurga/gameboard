import firebase from '@lib/firebase';

export const watchFriends = () => (dispatch) => {
  const { uid } = firebase.auth().currentUser;
  const friendsPath = `friends/${uid}`;

  //  Remove any existing queries.
  firebase.database()
    .ref(friendsPath)
    .off();

  //  Now watch all of the played games for that game.
  firebase.database()
    .ref(friendsPath)
    .on('value', (snapshot) => {
      const friends = [];
      snapshot.forEach((child) => {
        const item = child.val();
        item.key = child.key;
        friends.push(item);
      });
      dispatch({
        type: 'FRIENDS_UPDATE_FRIENDS',
        data: friends,
      });
    });
};

export const addFriend = (friend) => {
  const { uid } = firebase.auth().currentUser;
  const friendsPath = `friends/${uid}`;

  //  Push a friend. This'll trigger the store to update via the watch function
  //  above.
  firebase.database()
    .ref(friendsPath)
    .push(friend);
};
