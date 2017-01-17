// Users
const initialUserState = {
  lastUpdated: 0,
  info: {
    name: '',
    id: '',
    avatar: ''
  }
};

function user(state = initialUserState, action) {
  switch (action.type) {
    case 'FETCHING_USER_SUCCESS':
      return {
        ...state,
        info: action.user,
        lastUpdated: action.timestamp
      };
    default:
      return state;
  }
}

const initialState = {
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: ''
};

function users(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      };
    case 'UNAUTH_USER':
      return {
        ...state,
        isAuthed: false,
        authedId: ''
      };
    case 'FETCHING_USER':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCHING_USER_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case 'FETCHING_USER_SUCCESS':
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: '',
        }
        : {
          ...state,
          isFetching: false,
          error: '',
          [action.uid]: user(state[action.uid], action)
        };
    default:
      return state;
  }
}

// Ducks
const initialDucksState = {
  isFetching: true,
  error: '',
  duckId: '',

};

function ducks(state = initialDucksState, action) {
  switch (action.type) {
    case 'FETCHING_DUCK':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCHING_DUCK_FAILURE':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'ADD_DUCK':
    case 'FETCHING_DUCK_SUCCESS':
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duck.duckId]: action.duck
      };
    case 'REMOVE_FETCHING':
      return {
        ...state,
        isFetching: false,
        error: ''
      };
    case 'ADD_MULTIPLE_DUCKS':
      return {
        ...state,
        error: '',
        isFetching: false,
        ...action.ducks
      };
    default:
      return state;
  }
}

// Feed
const initialFeedState = {
  newDucksToAdd: [],
  duckIds: [],
  isFetching: false,
  newDucksAvailable: false,
  error: ''
};

function feed(state = initialFeedState, action) {
  switch (action.type) {
    case 'ADD_NEW_DUCK_ID_TO_FEED':
      return {
        ...state,
        newDucksToAdd: [action.duckId, ...state.newDucksToAdd],
        newDucksAvailable: true
      };
    case 'RESET_NEW_DUCKS_AVAILABLE':
      return {
        ...state,
        duckIds: [...state.newDucksToAdd, ...state.duckIds],
        newDucksToAdd: [],
        newDucksAvailable: false
      };
    case 'SETTING_FEED_LISTENER':
      return {
        ...state,
        isFetching: true
      };
    case 'SETTING_FEED_LISTENER_FAILURE':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'SETTING_FEED_LISTENER_SUCCESS':
      return {
        ...state,
        error: '',
        isFetching: false,
        duckIds: action.duckIds,
        newDucksAvailable: false
      };
    default:
      return state;
  }
}

// Listeners
function listeners(state = {}, action) {
  switch (action.type) {
    case 'ADD_LISTENER':
      return {
        ...state,
        [action.listenerId]: true
      };
    default:
      return state;
  }
}

// Modal
const initialModalState = {
  duckText: '',
  isOpen: false
};

function modal(state = initialModalState, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        duckText: '',
        isOpen: false
      };
    case 'UPDATE_DUCK_TEXT':
      return {
        ...state,
        duckText: action.duckText,
        isOpen: false
      };
    default:
      return state;
  }
}

// Likes
const initialUsersLikesState = {
  duckIds: [],
  isFetching: false,
};

function usersLikes(state = initialUsersLikesState, action) {
  switch (action.type) {
    case 'FETCH_USERS_LIKES':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_USERS_LIKES_FAILURE':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'FETCH_USERS_LIKES_SUCCESS':
      return {
        ...state,
        ...action.likes,
        error: '',
        isFetching: false,
        timestamp: action.lastUpdated
      };
    case 'ADD_LIKE':
      return {
        ...state,
        [action.duckId]: true
      };
    case 'REMOVE_LIKE':
      return Object.keys(state)
        .filter((duckId) => duckId !== action.duckId)
        .reduce((prev, current) => {
          prev[current] = true;
          return prev;
        }, {});
    default:
      return state;
  }
}

// Like Count
function count(state = 0, action) {
  switch (action.type) {
    case 'ADD_LIKE':
      return state + 1;
    case 'REMOVE_LIKE':
      return state - 1;
    default:
      return state;
  }
}

const initialLikeCountState = {
  isFetching: false,
  error: ''
};

function initialLikeCount(state = {}, action) {
  switch (action.type) {
    case 'FETCH_COUNT':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_COUNT_FAILURE':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'FETCH_COUNT_SUCCESS':
      return {
        ...state,
        // Shorthand to reset isFetching and error props
        ...initialLikeCountState,
        error: '',
        isFetching: false,
        [action.duckId]: action.count
      };
    case 'ADD_LIKE':
    case 'REMOVE_LIKE':
      return typeof state[action.duckId] === 'undefined'
        ? state
        : {
          ...state,
          [action.duckId]: count(state[action.duckId], action)
        };
      
    default:
      return true;
  }
}

// Replies
const initialDuckRepliesState = {
  name: '',
  reply: '',
  timestamp: 0,
  uid: '',
  avatar: '',
  replyId: ''
};

function duckReplies(state = initialDuckRepliesState, action) {
  switch (action.type) {
    case 'ADD_REPLY':
      return {
        ...state,
        [action.reply.replyId]: action.reply
      };
    case 'REMOVE_REPLY':
      return Object.keys(state)
        .filter((replyId) => replyId !== action.replyId)
        .reduce((prev, current) => {
          prev[current] = state[current];
          return prev;
        }, {});
    default:
      return state;
  }
}

const initialRALState = {
  lastUpdated: Date.now(),
  replies: {}
};

function repliesAndLastUpdated(state, action) {
  switch (action.type) {
    case 'FETCH_REPLIES_SUCCESS':
      return {
        ...state,
        lastUpdated: action.lastUpdated,
        replies: action.replies
      };
    case 'ADD_REPLY':
    case 'REMOVE_REPLY':
      return {
        ...state,
        replies: duckReplies(state.replies, action)
      };
    default:
      return state;
  }
}

const initialRepliesState = {
  error: '',
  isFetching: false
};

function replies(state = initialRepliesState, action) {
  switch (action.type) {
    case 'FETCH_REPLIES':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_REPLIES_FAILURE':
    case 'ADD_REPLY_FAILURE':
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case 'ADD_REPLY_SUCCESS':
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duckId]: action.replies,
        lastUpdated: action.lastUpdated
      };
    case 'ADD_REPLY':
    case 'REMOVE_REPLY':
    case 'FETCH_REPLIES_SUCCESS':
      return {
        ...state,
        error: '',
        isFetching: false,
        [action.duckId]: repliesAndLastUpdated(state[action.duckId], action)
      };
    default:
      return state;
  }
}






















