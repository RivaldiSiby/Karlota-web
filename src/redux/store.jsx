import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";

// persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
