import React, { Component } from 'react'
import { connect } from "react-redux"
import { mainAction, showPop, hidePop } from "../actions/index"
import  AvatarPopUp from './AvatarPopUp'

class Avatar extends Component {

    popHandler = () => {
        const {togglePop, hidePop, showPop} = this.props
        if (togglePop) hidePop()
        else showPop()
    }

    renderAvatar = () => {
        const { picArr, fetch, togglePop, activeAvatar: { animate }, activeAvatar: {id}} = this.props

        if (togglePop) return (
            <AvatarPopUp
                className={'avatar-popup'}
                picArr={picArr}
                fetch={fetch}
                animate={animate}
                popHandler={this.popHandler}
                disable={id}
            />
        )

        return null
    }

    render() {
        const { picArr, activeAvatar: {id} } = this.props

        return (
            <div className={'avatar-container'} >
                <img className={'main-avatar'} src={picArr[id]} onClick={this.popHandler}/>
                {this.renderAvatar()}
            </div>
        )
    }
}

export default connect(
    state => ({
        activeAvatar: state.activeAvatar,
        togglePop: state.togglePop,
    }),
    {
        fetch: mainAction,
        showPop: showPop,
        hidePop: hidePop
    }
)(Avatar)