import React from 'react'
import { connect } from "react-redux";
import { showPop, hidePop, setAvatar } from "../actions/index";
import  AvatarPopUp from './AvatarPopUp'

class Avatar extends React.Component {

    componentDidUpdate(props) {
        console.log('updated', props)
       
    }

    popHandler = () => {
        const pop = document.querySelector('.avatar-popup')
        pop.classList.toggle('show')
    }

    render() {


        console.log('activeAvatar in avaatar', this.props.activeAvatar)
        const { picArr, activeAvatar } = this.props
        
        return (
            <div className={'avatar-container'} >
                <img className={'main-avatar'} src={picArr[this.props.activeAvatar]} onClick={this.popHandler}/>
                <AvatarPopUp picArr={picArr}  hidePop={this.props.hidePop} 
                                              setAvatar={this.props.setAvatar} 
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
        // changeAvatar: changeAvatar,
        // showPop: showPop,
        // hidePop: hidePop,
        setAvatar: setAvatar
    }
)(Avatar)