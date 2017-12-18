import React from 'react'
import Avatar from '../containers/Avatar'
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import avatar5 from '../img/avatar5.png'
import avatar6 from '../img/avatar6.png'

const picArr = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

const App = () => (
  <div>
    <Avatar picArr={picArr}/>
  </div>
)

export default App