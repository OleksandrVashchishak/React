import React from 'react'
import phoneImg from '../../../assets/img/svg/phone-svg.svg'
import avatarDefault from '../../../assets/img/svg/accaunt-cont-ava.svg'


const SingleRealtyTop = ({ item }) => {
    const [showPhone, setShowPhone] = React.useState('')
    return (
        <section className="open-notice__start open-notice__vacansion">
            <div className="open-notice__container open-notice__container-shadow">
                <div className="open-notice__df">
                    <div className="open-notice__start-left">
                        <h3 className="open-notice__title-main"> {item.nameRealty} </h3>
                        <div className="open-notice__subtitle-vacansion"> {item.price} $</div>
                        <div className="new-ads__info-wrap--bottom open-notice__time">
                            <span className="new-ads__localization">{item.category}</span>
                            <time className="new-ads__date"> {item.dateTime} </time>
                        </div>
                    </div>

                    <div className="open-notice__start-right">
                        <p className="open-notice__name">
                            <img src={avatarDefault} alt="img" />
                            {item.firstName} {item.lastName}
                        </p>

                        {item.phone.trim() && <div className="open-notice__border-show-phone" onClick={() => setShowPhone('active')} >
                            <span className={`show-number ${showPhone}`}>
                                <img src={phoneImg} alt="img" className="open-notice__border-show-phone-svg" />   ПОКАЗАТИ ТЕЛЕФОН
                            </span>
                            <span className={`hide-number ${showPhone}`}>{item.phone}</span>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleRealtyTop
