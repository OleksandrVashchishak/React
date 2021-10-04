import React from 'react'
import { Link } from 'react-router-dom';

const SingleRealtyNav = ({item}) => {
    return (
        <div className="container">
        <div>
            <ul className="breadcrumbs">
                <li><Link to='/'> Нерухомість </Link></li>
                <li>{item.nameRealty}</li>
            </ul>
        </div>
    </div>
    )
}

export default SingleRealtyNav
