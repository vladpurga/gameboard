import firebase from 'react-native-firebase';

export const updateFriends = friends => ({
  type: 'FRIENDS_UPDATE_FRIENDS',
  data: friends,
});

export const addFriend = (friend) => {
  const { uid } = firebase.auth().currentUser;
  const friendsPath = `friends/${uid}`;

  //  Push a friend. This'll trigger the store to update via the watch function
  //  above.
  firebase.database()
    .ref(friendsPath)
    .push(friend);

  //  Add the friend locally - it'll get updated and replaced by firebase when
  //  the friend arrives server-side and is synchronised back to the client.
  return {
    type: 'FRIENDS_ADD_FRIEND',
    data: friend,
  };
};
