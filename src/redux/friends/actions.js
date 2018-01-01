export function addFriend(friend) {
  return {
    type: 'ADD_FRIEND',
    data: friend,
  };
}

export function noop() { }
