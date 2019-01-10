import { combineReducers } from 'redux'
import twitterReducer from './twitter'

const rootReducer = combineReducers({
    twitter: twitterReducer
})

export default rootReducer