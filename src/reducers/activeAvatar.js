export const activeAvatar = (state = {
    isPending: null,
    id: 0,
    animate: null
}, action) => {
    switch(action.type) {

        case 'PENDING' :
            return Object.assign({}, state, {
                isPending: action.isPending,
                animate: action.id,
            })

        case 'SET_AVATAR' :
            return Object.assign({}, state, {
                isPending: false,
                animate: null,
                id: action.id,
            })

        default:
            return state
    }
}

export const togglePop = (state = false, action) => {
    switch (action.type) {

        case 'SHOW_POP':
            return true

        case 'HIDE_POP':
            return false

        default:
            return state;
    }
}

