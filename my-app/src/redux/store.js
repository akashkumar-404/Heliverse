
    import{legacy_createStore,combineReducers,applyMiddleware} from "redux";
    import thunk from "redux-thunk";
    import {AppReducer} from "./reducer"

    const rootReducer=combineReducers({
        AppReducer
    })
    const store =legacy_createStore(rootReducer,applyMiddleware(thunk))

    export {store}