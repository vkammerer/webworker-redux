import { createStore, applyMiddleware } from "redux";
import { createCycleMiddleware } from "redux-cycles";
import { createWorkerMiddleware } from "@vkammerer/redux-postmessage-raf";

const defaultState = { ticking: false };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "PING_TOGGLE":
      return {
        ...state,
        ticking: !state.ticking
      };
    default:
      return state;
  }
};

const mainMiddleware = createWorkerMiddleware(
  {
    // debug: true
  }
);

const cycleMiddleware = createCycleMiddleware();
export const { makeActionDriver, makeStateDriver } = cycleMiddleware;

export const store = createStore(
  reducer,
  applyMiddleware(mainMiddleware, cycleMiddleware)
);
