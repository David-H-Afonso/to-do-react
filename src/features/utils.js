export const reduceReducers =
  (...reducers) =>
  (state, action) => {
    reducers.reduce((acc, el) => el(acc, action), state);
  };

const initialFetching = { loading: "idle", error: null };
export const makeFetchingReducer = actions => (state = initialFetching, action) => {
    // console.log("esto", action.type, actions)
    switch (action.type) {
      case actions[0]: {
        console.log("0",action.type,actions)
        return { ...state, loading: "pending" };
      }
      case actions[1]: {
        console.log("1",action.type,actions)
        return { ...state, loading: "succeded" };
      }
      case actions[2]: {
        return { error: action.error, loading: "rejected" };
      }
      default: {
        console.log("default",action.type,actions)
        return state;
      }
    }
  };

export const makeSetReducer =
  (actions) =>
  (state = "all", action) => {
    console.log(action.type, actions)
    switch (action.type) {
      case actions[0]:
        console.log("0")
        return action.payload;
      default:
        console.log("default")
        return state;
    }
  };

export const makeCrudReducer =
  (actions) =>
  (state = [], action) => {
    switch (action.type) {
      case actions[0]: {
        return state.concat({ ...action.payload });
      }

      case actions[1]: {
        const newEntities = state.map((entity) => {
          if (entity.id === action.payload.id) {
            return { ...entity, completed: !entity.completed };
          }

          return entity;
        });
        return newEntities;
      }
      default: {
        return state;
      }
    }
  };
