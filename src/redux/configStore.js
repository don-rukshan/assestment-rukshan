import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

let composeEnhancers;
const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

composeEnhancers = compose;

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
