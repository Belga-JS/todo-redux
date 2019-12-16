import listTodoReducers from './Reducers/listTodoReducers'
import ChangeTxtReducers from './Reducers/changeTxtReducers'
import { createStore, combineReducers } from 'redux'

const store = createStore(combineReducers({

    listTodoReducers: listTodoReducers,
    ChangeTxtReducers: ChangeTxtReducers


})
)
export default store;