import { combineReducers } from 'redux'
import { activeAvatar, togglePop } from './activeAvatar'

const appReducers = combineReducers({
  activeAvatar,
  togglePop
})

export default appReducers;
