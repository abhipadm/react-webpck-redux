import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeeEnhancers = window.__REDUX_EXTENSION_COMPOSE__ || compose; //add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))

    /**
     *  composeeEnhancers - support tool for the redux
     *  applyMiddleware - to add any additional features to redux
     *  reduxImmutableStateInvariant() - to warn if any unintentional mutation happens
     */
  );
}
