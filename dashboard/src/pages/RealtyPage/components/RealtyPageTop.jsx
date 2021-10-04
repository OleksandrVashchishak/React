import React from 'react'
import propertyHeaderImg from "../../../assets/img/png/property.png";


const RealtyPageTop = () => {
    return (
        <section className="property-greetings">
            <div className="container">
                <ul className="breadcrumbs">
                    <li>
                        <span href="/">Головна</span>
                    </li>
                </ul>

                <div className="vacancy__header--ttl">
                    <h1>Нерухомість</h1>
                    <p>Продавай, купляй, або бери в оренду</p>
                </div>

                <div className="head__info head__info--bottom">
                    <div>
                        <p className="head__info__count" data-value="3933">
                            3 933
                        </p>
                        <p className="head__info__desc">НОВИХ ЗА ТИЖДЕНЬ</p>
                    </div>

                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="22" cy="22" r="22" fill="#FF9066"></circle>
                        <path
                            d="M26.8338 16.5834C26.8338 19.1147 24.7817 21.1666 22.2504 21.1666C19.7191 21.1666 17.667 19.1147 17.667 16.5834C17.667 14.0521 19.7191 12 22.2504 12C24.7817 12 26.8338 14.0521 26.8338 16.5834Z"
                            fill="#F2F2F2"
                        ></path>
                        <path
                            d="M26.1459 23H18.3541C15.9534 23 14 24.9534 14 27.3541V30.5625C14 30.942 14.308 31.25 14.6875 31.25H29.8125C30.192 31.25 30.5 30.942 30.5 30.5625V27.3541C30.5 24.9534 28.5466 23 26.1459 23Z"
                            fill="#F2F2F2"
                        ></path>
                    </svg>
                </div>

                <div className="head__info head__info--center">
                    <div>
                        <p className="head__info__count" data-value="19512">
                            19 512
                        </p>
                        <p className="head__info__desc">НОВИХ ЗА МІСЯЦЬ</p>
                    </div>

                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="22" cy="22" r="22" fill="#00AB5B"></circle>
                        <path
                            d="M28.9772 21.1364H23.8636V16.0227C23.8636 15.4582 23.4054 15 22.8409 15H22.1591C21.5945 15 21.1364 15.4582 21.1364 16.0227V21.1364H16.0227C15.4582 21.1364 15 21.5945 15 22.1591V22.8409C15 23.4054 15.4582 23.8636 16.0227 23.8636H21.1364V28.9772C21.1364 29.5418 21.5945 30 22.1591 30H22.8409C23.4054 30 23.8636 29.5418 23.8636 28.9772V23.8636H28.9772C29.5418 23.8636 30 23.4054 30 22.8409V22.1591C30 21.5945 29.5418 21.1364 28.9772 21.1364Z"
                            fill="#F2F2F2"
                        ></path>
                    </svg>
                </div>

                <div className="greetings-background-wrap">
                    <img
                        src={propertyHeaderImg}
                        alt=""
                        className="vacancy__background"
                    />
                </div>
            </div>
        </section>
    )
}

export default RealtyPageTop
