import React from 'react'
import { connect } from "react-redux";
import { setAvatar } from "../actions/index";
import  AvatarPopUp from './AvatarPopUp'

class Avatar extends React.Component {

    popHandler = () => {
        const pop = document.querySelector('.avatar-popup')
        pop.classList.toggle('show')
    }

    render() {
        const { picArr, activeAvatar, setAvatar } = this.props
        
        return (
            <div className={'avatar-container'} >
                <img className={'main-avatar'} src={picArr[activeAvatar]} onClick={this.popHandler}/>
                <AvatarPopUp picArr={picArr}
                             setAvatar={setAvatar}
                             popHandler={this.popHandler}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        popup: state.popup,
        activeAvatar: state.activeAvatar
    }),
    {
        setAvatar: setAvatar
    }
)(Avatar)