import { match } from "minimatch"

const initState = [
    { "id": 1, "text": "item2", "undo": "text-undo" },
    { "id": 2, "text": "item3", "undo": "text-normal" },

]


const listTodoReducers = (state = initState, action) => {

    if (action.type === 'ADD_TODO')
    return [...this.state,{"id":match.random, "text":action.text, "undo":action.undo}]


    return state
}
export default listTodoReducers