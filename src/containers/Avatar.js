import React from 'react'
import { connect } from "react-redux";
import { setAvatar, selectAvatar, mainAction } from "../actions/index";
import  AvatarPopUp from './AvatarPopUp'

class Avatar extends React.Component {

    popHandler = () => {
        const pop = document.querySelector('.avatar-popup')
        pop.classList.toggle('show')
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { picArr, activeAvatar, fetch } = this.props
        
        return (
            <div className={'avatar-container'} >
                <img className={'main-avatar'} src={picArr[activeAvatar.id]} onClick={this.popHandler}/>
                <AvatarPopUp picArr={picArr}
                             fetch={fetch}
                             popHandler={this.popHandler}
                             pend={activeAvatar.isPending}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        activeAvatar: state.activeAvatar
    }),
    {
        fetch: mainAction
    }
)(Avatar)