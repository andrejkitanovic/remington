import React from 'react'

const sortiranjeIPretrage = props => {
    return <div className="SortiranjeIPretraga">
        <div className={props.active === 0 ? "active" : ""}>Sortiranje kategorija</div>
        <div className={props.active === 1 ? "active" : ""}>Sortiranje filmova</div>
        <div className={props.active === 2 ? "active" : ""}>Pretraga</div>
    </div>
}

export default sortiranjeIPretrage