import React from 'react'
import avatarDefault from '../../assets/img/svg/accaunt-cont-ava.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';


const HeaderAccountPopup = ({ exitFromAccount }) => {
    const [activeDrobdown, setActiveDrobdown] = React.useState(false)
    const accountRef = React.useRef();
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(accountRef.current)) {
            setActiveDrobdown('');
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);


    const [cookies] = useCookies();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === cookies.currentUser.id && item.id)

    return (
        <>
            {currentUser &&
                <li className="header-nav__item header-nav__user-wrap" ref={accountRef}>

                    <button onClick={() => setActiveDrobdown(!activeDrobdown)} className="header-nav__link user-name accordion">
                        <svg className="registration-btn--icon" width="17" height="20" viewBox="0 0 17 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.8338 4.58339C12.8338 7.11469 10.7817 9.16661 8.25038 9.16661C5.71909 9.16661 3.66699 7.11469 3.66699 4.58339C3.66699 2.05209 5.71909 0 8.25038 0C10.7817 0 12.8338 2.05209 12.8338 4.58339Z"
                                fill="#77CCF9" />
                            <path
                                d="M12.1459 11H4.35411C1.9534 11 0 12.9534 0 15.3541V18.5625C0 18.942 0.307999 19.25 0.6875 19.25H15.8125C16.192 19.25 16.5 18.942 16.5 18.5625V15.3541C16.5 12.9534 14.5466 11 12.1459 11Z"
                                fill="#77CCF9" />
                        </svg>
                        <svg className="registration-btn--icon-mobile" width="14" height="16" viewBox="0 0 14 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.66688 3.80957C9.66688 5.36117 8.40901 6.619 6.85731 6.619C5.30562 6.619 4.04774 5.36117 4.04774 3.80957C4.04774 2.25792 5.30566 1 6.85731 1C8.40896 1 9.66688 2.25792 9.66688 3.80957ZM3.619 10.1428H10.0953C11.5384 10.1428 12.7143 11.3187 12.7143 12.7618V14.9999H1V12.7618C1 11.3187 2.17589 10.1428 3.619 10.1428Z"
                                stroke="#77CCF9" strokeWidth="2" />
                        </svg>
                        <span>{currentUser.firstName} {currentUser.lastName}</span>
                    </button>

                    {activeDrobdown && <div className='panel header-nav__user-dropdown'  >
                        <ul className="header-nav__user-desktop-list">
                            <li className="header-nav__user-name-wrap">

                                {currentUser.avatar[0] && currentUser.avatar.map((image, index) => (
                                    <div key={index} className="header-nav__avatar-wrap">
                                        <img src={image['data_url']} alt="avatar" />
                                    </div>
                                ))
                                }

                                {!currentUser.avatar[0] && <div className="header-nav__avatar-wrap">
                                    <img src={avatarDefault} alt="avatar" />
                                </div>}

                                <span className="header-nav__user-desktop-user-name">
                                    {currentUser.firstName} {currentUser.lastName}
                                </span>
                            </li>
                            <li className="header-nav__user-desktop-item">
                                <Link to="/account"> <span href="/" className="header-nav__user-desktop-link">
                                    <svg className="registration-btn--icon" width="17" height="20" viewBox="0 0 17 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.8338 4.58339C12.8338 7.11469 10.7817 9.16661 8.25038 9.16661C5.71909 9.16661 3.66699 7.11469 3.66699 4.58339C3.66699 2.05209 5.71909 0 8.25038 0C10.7817 0 12.8338 2.05209 12.8338 4.58339Z"
                                            fill="#77CCF9" />
                                        <path
                                            d="M12.1459 11H4.35411C1.9534 11 0 12.9534 0 15.3541V18.5625C0 18.942 0.307999 19.25 0.6875 19.25H15.8125C16.192 19.25 16.5 18.942 16.5 18.5625V15.3541C16.5 12.9534 14.5466 11 12.1459 11Z"
                                            fill="#77CCF9" />
                                    </svg>
                                    <span>Особистий кабінет</span>
                                </span></Link>
                            </li>
                            <li className="header-nav__user-desktop-item" onClick={() => setActiveDrobdown(!activeDrobdown)}>
                                <span className="header-nav__user-desktop-link" onClick={() => exitFromAccount()}>
                                    <svg className="login-btn--icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M16.25 0V3.75001H13.75V2.49998H3.75001V17.5H13.75V16.25H16.25V20H1.24999V0H16.25Z"
                                                fill="#77CCF9" />
                                            <path
                                                d="M12.3486 12.8662L14.1162 14.6338L18.75 10L14.1162 5.36621L12.3487 7.13378L13.9649 8.74997H7.50001V11.25H13.9649L12.3486 12.8662Z"
                                                fill="#77CCF9" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 1 20 0)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span >Вихід</span>
                                </span>
                            </li>
                        </ul>
                    </div>}
                </li>
            }
        </>
    )
}

export default HeaderAccountPopup
