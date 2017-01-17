const state = {
  feed: {
    duckIdsToAdd: [duckId, duckId],
    duckIds: [duckId, duckId],
    isFetching: false,
    error: 'Error fetching Id',
    newDucksAvailable: false
  },
  listeners: {
    [listenersId]: true
  },
  modal: {
    duck: 'text',
    isOpen: false
  },
  users: {
    isAuthed: false,
    isFetching: false,
    error: 'Error fetching Id',
    authedId: 'id',
    [uid]: {
      lastUpdated: 'date',
      info: {
        name: 'name',
        uid: 'number',
        avatar: 'string'
      }
    }
  },
  ducks: {
    [duckId]: {
      info: {
        avatar: 'string',
        name: 'string',
        text: 'string',
        timestamp: 'date',
        uid: uid,
        replies: [replyId, replyId]
      }
    }
  },
  usersDucks: {
    isFetching: false,
    error: 'Error',
    [uid]: {
      duckIds: [duckId, duckId]
    }
  },
  likeCount: {
    [duckId]: 'number'
  },
  replies: {
    isFetching: false,
    error: 'Error',
    [duckId]: {
      lastUpdated,
      replies: {
        [replyId]: {
          name: 'string',
          reply: 'string',
          timestamp: 'date',
          uid: uid,
          avatar: '',
          replyId: ''
        }
      }
    }
  },
  usersLikes: {
    [duckId]: true
  }
};
