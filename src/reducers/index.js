import { combineReducers } from 'redux'
import popup from './popup'
import activeAvatar from './activeAvatar'

const appReducers = combineReducers({
  popup,
  activeAvatar
})

export default appReducers;
