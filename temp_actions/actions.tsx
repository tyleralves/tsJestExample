actions = [
  // Users
  {
    type: 'AUTH_USER',
    uid
  },
  {
    type: 'UNAUTH_USER'
  },
  {
    type: 'FETCHING_USER'
  },
  {
    type: 'FETCHING_USER_FAILURE',
    error: 'Error fetching user'
  },
  {
    type: 'FETCHING_USER_SUCCESS',
    uid,
    user
    timestamp
  },

  // Ducks
  {
    type: 'FETCHING_DUCK'
  },
  {
    type: 'FETCHING_DUCK_FAILURE',
    error: 'Error fetching duck'
  },
  {
    type: 'FETCHING_DUCK_SUCCESS',
    duck,
    timestamp
  },
  {
    type: 'REMOVE_FETCHING'
  },
  {
    type: 'ADD_DUCK',
    duck
  },
  {
    type: 'ADD_MULTIPLE_DUCKS',
    ducks
  },

  // Feed
  {
    type: 'ADD_NEW_DUCK_ID_TO_FEED',
    duck
  },
  {
    type: 'RESET_NEW_DUCKS_AVAILABLE',
    duck
  },
  {
    type: 'SETTING_FEED_LISTENER'
  },
  {
    type: 'SETTING_FEED_LISTENER_FAILURE',
    error: 'Error fetching feed'
  },
  {
    type: 'SETTING_FEED_LISTENER_SUCCESS',
    duckIds,
  },
  {
    type: 'REMOVE_FETCHING'
  },

  // Listeners
  {
    type: 'ADD_LISTENER',
    listenerId
  },

  // Modal
  {
    type: 'OPEN_MODAL'
  },
  {
    type: 'CLOSE_MODAL'
  },
  {
    type: 'UPDATE_DUCK_TEXT',
    duckText: 'string'
  },

  // Replies
  {
    type: 'FETCH_REPLIES'
  },
  {
    type: 'FETCHING_REPLIES_FAILURE',
    error: 'Error fetching replies'
  },
  {
    type: 'FETCHING_REPLIES_SUCCESS',
    replies,
    duckId,
    lastUpdated: Date.now()
  },
  {
    type: 'ADD_REPLY',
    reply,
    duckId
  },
  {
    type: 'ADD_REPLY_FAILURE',
    error: 'Error adding reply'
  },
  {
    type: 'ADD_REPLY_SUCCESS',
    duckId,
    reply
  },
  {
    type: 'REMOVE_REPLY',
    duckId,
    replyId
  },

  // Like Count
  {
    type: 'FETCH_COUNT',
    duckId
  },
  {
    type: 'FETCHING_COUNT_FAILURE',
    error: 'Error fetching like count'
  },
  {
    type: 'FETCHING_COUNT_SUCCESS',
    duckId,
    count
  },

  // Users Ducks
  {
    type: 'FETCH_USERS_DUCKS',
    uid
  },
  {
    type: 'FETCHING_USERS_DUCKS_FAILURE',
    error: 'Error fetching users ducks'
  },
  {
    type: 'FETCHING_USERS_DUCKS_SUCCESS',
    uid,
    duckIds,
    lastUpdated
  },
  {
    type: 'ADD_SINGLE_USERS_DUCK',
    uid,
    duckIds,
    lastUpdated
  }

  // usersLikes
  {
    type: 'FETCH_USERS_LIKES'
  },
  {
    type: 'FETCHING_USERS_LIKES_FAILURE',
    error: 'Error fetching users LIKES'
  },
  {
    type: 'FETCHING_USERS_LIKES_SUCCESS',
    likes
  },
  {
    type: 'ADD_LIKE',
    duckId
  },
  {
    type: 'REMOVE_LIKE',
    duckId
  }
];
