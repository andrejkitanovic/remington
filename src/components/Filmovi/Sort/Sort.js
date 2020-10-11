import React from 'react'
import './Sort.scss'

const sort = props => {
    return <div className="Sort">
        <div className={props.active === 0 ? "active" : ""}>Zadno</div>
        <div className={props.active === 1 ? "active" : ""}>A-Z</div>
        <div className={props.active === 2 ? "active" : ""}>Z-A</div>
        <div className={props.active === 3 ? "active" : ""}>Datum objave</div>
    </div>
}

export default sort