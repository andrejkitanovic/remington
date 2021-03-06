import React from 'react'
import './TVKanali.scss'

import Kanal from '../../../assets/Delete/kanal.png'

const tvKanali = props => {
    const kanali = props.kanali.map((kanal,index) => <div className={"Kanal" + (props.position === index ? " active" : "")}><div style={{backgroundImage:`url(${Kanal})`}}/></div>)

    return <div className="TVKanaliPocetna" style={{transform:`translateX(${props.position > 3 ? (props.position - 3) * -194 : 0}px) translateY(${props.translate ? -250 : 0}px)`,transition:`${props.position > 3 ? ".4" : "0"}s`}} >
        {kanali}
    </div>
}

export default tvKanali