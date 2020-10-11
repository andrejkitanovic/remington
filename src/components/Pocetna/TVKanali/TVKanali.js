import React from 'react'
import './TVKanali.scss'

import Kanal from '../../../assets/Delete/kanal.png'

const tvKanali = props => {
    const kanali = props.kanali.map((kanal) => <div className="Kanal"><img src={Kanal} alt="Kanal"/></div>)

    return <div className="TVKanaliPocetna" style={{right:props.position * 181 + "px"}}>
        {kanali}
    </div>
}

export default tvKanali