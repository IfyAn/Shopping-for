//Import createStore and applyMiddlewear
import { createStore, /*applyMiddlewear*/ compose } from 'redux'
//import thunk
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState={}

//const middlewear= [thunk];

const store= createStore(
    rootReducer,
    initialState,
    compose(
        //applyMiddlewear(...middlewear)
     //   window.devToolsExtension ?  window.devToolsExtension() :f => f
    )
)

export default store