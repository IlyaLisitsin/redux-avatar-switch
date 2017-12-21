import React from 'react'
import { connect } from "react-redux"
import { setAvatar, selectAvatar, mainAction, showPop, hidePop } from "../actions/index"
import classNames from 'classnames'
import  AvatarPopUp from './AvatarPopUp'

class Avatar extends React.Component {

    popHandler = () => {
        const {togglePop, hidePop, showPop} = this.props
        if (togglePop) hidePop()
        else showPop()
    }

    componentDidMount() {
        console.log('pend', this.props.activeAvatar.isPending)
        console.log('sddsfdsfdsfsdfsdfsds', this.props)
    }

    render() {
        const { picArr, activeAvatar, fetch } = this.props

        return (
            <div className={'avatar-container'} >
                {this.props.activeAvatar.isPending && <div>Renewing...</div>}
                <img className={'main-avatar'} src={picArr[activeAvatar.id]} onClick={this.popHandler}/>
                {this.props.togglePop && <AvatarPopUp className={'avatar-popup'}
                                                      picArr={picArr}
                                                      fetch={fetch}
                                                      pend={activeAvatar.isPending}
                />}
            </div>
        )
    }
}

export default connect(
    state => ({
        activeAvatar: state.activeAvatar,
        togglePop: state.togglePop
    }),
    {
        fetch: mainAction,
        showPop: showPop,
        hidePop: hidePop
    }
)(Avatar)