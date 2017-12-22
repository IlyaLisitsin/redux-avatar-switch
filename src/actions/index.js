export const setAvatar = (id) => ({ type: 'SET_AVATAR', id })
export const pending = (isPending, id) => ({ type: 'PENDING', isPending, id })
export const showPop = () => ({ type: 'SHOW_POP' })
export const hidePop = () => ({ type: 'HIDE_POP' })


export function mainAction(id) {

    return dispatch => {

        const p1 = new Promise(resolve => resolve(
            setTimeout(() => {
                dispatch(setAvatar(id))
                dispatch(hidePop())
            }, 2000))
        )

        return Promise.all([p1]).then(() => dispatch(pending(true, id)))
    }
}

