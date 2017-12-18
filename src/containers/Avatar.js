import React from 'react'
import { connect } from "react-redux";
import { showPop, hidePop, setAvatar } from "../actions/index";
import  AvatarPopUp from './AvatarPopUp'

// import avatar1 from '../img/avatar1.png'
// import avatar2 from '../img/avatar2.png'
// import avatar3 from '../img/avatar3.png'
// import avatar4 from '../img/avatar4.png'
// import avatar5 from '../img/avatar5.png'
// import avatar6 from '../img/avatar6.png'
//
// const picArr = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]


class Avatar extends React.Component {

    componentDidMount() {
        let a = document.querySelector('.avatar-container')
        // window.addEventListener('click', (e) => {
        //     console.log(e.target.parentNode.className)
        //     e.preventDefault()
        //     //
        //     if (e.target.parentNode.className === 'avatar-container' ||
        //         e.target.parentNode.className === 'avatar-image') return
        //     else this.props.hidePop()
        // })
    }

    popHandler = () => {
        if (!this.props.popup) this.props.showPop()
        else this.props.hidePop()
    }

    render() {


        console.log(this.props)
        const { picArr } = this.props
        
        return (
            <div className={'avatar-container'} >
                <img className={'main-avatar'} src={picArr[this.props.activeAvatar]} onClick={this.popHandler}/>
                {this.props.popup && <AvatarPopUp picArr={picArr} hidePop={this.props.hidePop} setAvatar={this.props.setAvatar} popHandler={this.popHandler}/>}
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
        showPop: showPop,
        hidePop: hidePop,
        setAvatar: setAvatar
    }
)(Avatar)