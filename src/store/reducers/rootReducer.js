import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";


import userReducer from "./userReducer";
import adminReducer from './adminReducer';
import { cartReducer } from './cartReducer';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
};
const appPersistConfig  ={

    ...persistCommonConfig,
    key: 'app',
    whitelist:['language']
};
const adminPersistConfig = {

    ...persistCommonConfig,
    key: 'admin',
    whitelist: [ 'arrProduct' ]
};


export default (history) => combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),
    app: persistReducer( appPersistConfig, appReducer ),
    admin: persistReducer( adminPersistConfig, adminReducer ),
    cart: cartReducer,
   
})