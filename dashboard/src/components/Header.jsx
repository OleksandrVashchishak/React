import React from 'react'
import { Link } from 'react-router-dom';
import HeaderAccount from './HeaderComponent/HeaderAccount';
import { useCookies } from 'react-cookie';
import LoginButton from './HeaderComponent/LoginButton';
import { useHistory } from 'react-router-dom'
const Header = () => {
    const [cookies, , removeCookies] = useCookies(['login', 'currentUser']);
    const history = useHistory();

    const exitFromAccount = () => {
        history.push(`/`);
        setTimeout(() => {
            removeCookies(['login'], { path: '/' });
            removeCookies(['currentUser'], { path: '/' });
        }, 1)
    }

    return (
        <header className="page-header" id="header">
            <div className="page-header__container container">
                <div className="page-header__logo">
                    <Link to="/">
                        RealtyJs
                    </Link>
                </div>

                <div className="page-header__user-wrap">
                    <nav className="header-nav">
                        <div className="header-nav__wrapper">
                            <ul className="header-nav__list tablet-container">
                                <li className="header-nav__item header-nav__item--active">
                                    <a className="header-nav__link main-btn" href="/">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M15.7313 7.15253L8.55261 0.611355C8.23752 0.324199 7.76236 0.324231 7.44739 0.611324L0.268688 7.15256C0.0162826 7.38256 -0.0670923 7.73693 0.05622 8.05534C0.179564 8.37375 0.479875 8.57946 0.821344 8.57946H1.9679V15.1332C1.9679 15.3931 2.17859 15.6038 2.43843 15.6038H6.37324C6.63308 15.6038 6.84377 15.3931 6.84377 15.1332V11.154H9.15633V15.1333C9.15633 15.3931 9.36701 15.6038 9.62686 15.6038H13.5615C13.8213 15.6038 14.032 15.3931 14.032 15.1333V8.57946H15.1788C15.5202 8.57946 15.8206 8.37371 15.9439 8.05534C16.0671 7.7369 15.9837 7.38256 15.7313 7.15253Z"
                                                    fill="#77CCF9" />
                                                <path
                                                    d="M13.909 1.33545H10.749L14.3795 4.63657V1.80595C14.3795 1.54611 14.1689 1.33545 13.909 1.33545Z"
                                                    fill="#77CCF9" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span>Головна</span>
                                    </a>
                                </li>

                                {!cookies.login && <LoginButton />}
                                {cookies.login && <>   <li className="header-nav__item header-nav__item--message-item">
                                    <Link to="/account/messages" className="header-nav__message-btn">
                                        <div className="message-count-wrap">
                                            <svg className="message-icon-desktop" width="25" height="25" viewBox="0 0 25 25" fill="#77CCF9"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path
                                                        d="M24.4782 4.64629C21.047 7.5521 15.0264 12.6643 13.2569 14.2583C13.0193 14.4734 12.7645 14.5828 12.5 14.5828C12.2361 14.5828 11.9817 14.4745 11.7447 14.2604C9.97366 12.6648 3.95305 7.5521 0.521852 4.64629C0.308229 4.46572 0.275661 4.14834 0.44861 3.92759C0.848415 3.41748 1.44451 3.125 2.08338 3.125H22.9167C23.5555 3.125 24.1516 3.41748 24.5514 3.92764C24.7243 4.14834 24.6918 4.46572 24.4782 4.64629Z" />
                                                    <path
                                                        d="M0.302131 6.22049C0.48675 6.13456 0.703938 6.16454 0.857551 6.29579C3.10467 8.20057 6.06537 10.7173 8.29823 12.6378C8.41571 12.7386 8.48182 12.8866 8.47928 13.0417C8.47675 13.1963 8.40502 13.3423 8.28397 13.4389C6.20926 15.1006 3.08275 17.3864 0.824982 19.0109C0.734942 19.076 0.628155 19.1091 0.520831 19.1091C0.439434 19.1091 0.358087 19.0903 0.283282 19.0516C0.109307 18.9626 -1.71661e-05 18.7835 -1.71661e-05 18.5882V6.693C3.14713e-05 6.49007 0.118049 6.30545 0.302131 6.22049Z" />
                                                    <path
                                                        d="M24.175 19.0116C21.9167 17.3871 18.7896 15.1013 16.7155 13.4396C16.5944 13.343 16.5227 13.197 16.5202 13.0424C16.5176 12.8873 16.5837 12.7393 16.7012 12.6385C18.9341 10.718 21.8954 8.20128 24.1424 6.2965C24.2971 6.16525 24.5147 6.13629 24.6979 6.2212C24.882 6.30616 25 6.49078 25 6.69371V18.589C25 18.7843 24.8906 18.9633 24.7167 19.0524C24.6419 19.091 24.5605 19.1098 24.4792 19.1098C24.3718 19.1098 24.265 19.0768 24.175 19.0116Z" />
                                                    <path
                                                        d="M0.638348 20.4293C2.81882 18.8693 6.83547 15.961 9.23312 14.015C9.42844 13.8558 9.71125 13.8609 9.90349 14.0267C10.3739 14.4372 10.7676 14.7831 11.0469 15.0343C11.9045 15.8084 13.0946 15.8084 13.9542 15.0332C14.2324 14.7825 14.6261 14.4356 15.0966 14.0267C15.2873 13.8598 15.5706 13.8547 15.7665 14.0149C18.156 15.9543 22.1772 18.8662 24.3612 20.4292C24.4828 20.5167 24.5612 20.6515 24.5764 20.8005C24.5911 20.9496 24.5418 21.0976 24.4396 21.2074C24.0453 21.6322 23.4899 21.8758 22.9167 21.8758H2.08332C1.51008 21.8758 0.955194 21.6322 0.559978 21.2075C0.458269 21.0981 0.408417 20.9501 0.423162 20.8011C0.438446 20.6521 0.516766 20.5168 0.638348 20.4293Z" />
                                                </g>
                                            </svg>
                                            <svg className="message-icon-mobile" width="22" height="16" viewBox="0 0 22 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M19.2422 0.382812H2.75781C1.78977 0.382812 1 1.17172 1 2.14062V13.8594C1 14.825 1.78625 15.6172 2.75781 15.6172H19.2422C20.2078 15.6172 21 14.8309 21 13.8594V2.14062C21 1.175 20.2138 0.382812 19.2422 0.382812ZM11.0373 9.51691L18.9995 1.55469H3.00621L11.0373 9.51691ZM2.17188 2.3777V13.6167L7.81559 7.97301L2.17188 2.3777ZM8.64777 8.79805L3.00051 14.4453H18.9995L13.3828 8.82863L11.4534 10.758C11.2253 10.9862 10.8556 10.987 10.6266 10.7598L8.64777 8.79805ZM14.2114 8L19.8281 13.6167V2.38328L14.2114 8Z"
                                                    fill="#77CCF9" stroke="#77CCF9" strokeWidth="0.7" />
                                            </svg>

                                        </div>

                                        <span className="header-nav__message-btn-text">Сообщения</span>
                                    </Link>
                                </li>
                                    <HeaderAccount exitFromAccount={exitFromAccount} />
                                </>}

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
