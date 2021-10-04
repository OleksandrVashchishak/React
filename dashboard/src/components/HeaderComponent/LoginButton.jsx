import React from 'react'
import { setLoginPopup, setLoginForm } from '../../redux/actions/loginPopup';
import { useDispatch } from 'react-redux';

const LoginButton = () => {
    const dispatch = useDispatch();

    const openLoginForm = (boolean) => {
        dispatch(setLoginPopup(true))
        dispatch(setLoginForm(boolean))
    }

    return (
        <>
            <li className="header-nav__item">
                <span className="header-nav__link login-btn" onClick={() => openLoginForm(true)} >
                    <svg className="login-btn--icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M3.75 0V3.75001H6.24998V2.49998H16.25V17.5H6.24998V16.25H3.75V20H18.75V0H3.75Z"
                                fill="#77CCF9" />
                            <path
                                d="M6.09863 12.8662L7.8662 14.6338L12.5 10L7.86624 5.36621L6.09867 7.13378L7.71487 8.74997H1.25V11.25H7.71487L6.09863 12.8662Z"
                                fill="#77CCF9" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span>Вхід</span>
                </span>
            </li>
                <li className="header-nav__item">
                    <span className="header-nav__link registration-btn" onClick={() => openLoginForm(false)}>
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
                        <span>Реєстрація</span>
                    </span>
                </li> 
        </>
    )
}

export default LoginButton
