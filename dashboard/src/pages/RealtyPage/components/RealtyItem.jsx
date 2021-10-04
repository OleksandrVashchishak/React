import React from 'react'
import propertyImg from "../../../assets/img/jpg/home.jpg";

function RealtyItem({ item }) {

    return (
        <article className="new-ads__ad">
            <div className="">
                <img src={propertyImg} alt="Firm logo" />
            </div>
            <div className="new-ads__info-block">
                <div className="new-ads__title-block">
                    <h3 className="new-ads__item-title">{item.nameRealty}</h3>
                </div>
                <div className="align-bottom">
                    <div className="new-ads__info-wrap">
                        <span className="new-ads__user-name">{item.firstName}  {item.lastName}</span>
                        <span className="new-ads__money">{item.price} $</span>
                    </div>
                    <div className="new-ads__info-wrap new-ads__info-wrap--bottom">
                        <span className="new-ads__localization">{item.category} </span>
                        <time className="new-ads__date"> {item.dateTime} </time>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default RealtyItem
