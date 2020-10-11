import React from 'react'
import './SortiranjeIPretraga.scss'

const sortiranjeIPretrage = props => {
    return <div className="SortiranjeIPretraga">
        <div className={props.active === 0 ? "active" : ""}>Sortiranje filmova</div>
        <div className={props.active === 1 ? "active" : ""}>Pretraga</div>
    </div>
}

export default sortiranjeIPretrage