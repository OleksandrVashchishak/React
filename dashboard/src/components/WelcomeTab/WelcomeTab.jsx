import React from 'react'
import accountStartImg from '../../assets/img/svg/account-start-1.svg'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const WelcomeTab = () => {
    const [cookies] = useCookies();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === cookies.currentUser.id && item.id)

    return (
        <div className="personal__img-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <div className="vacancy__head account-main-i ">
                <img className="account-img-main" src={accountStartImg} alt="" />
            </div>
            <h3 className="personal__welcome">Раді вітати Вас в особистому кабінеті</h3>
            <div className="personal__your-name">{currentUser.firstName} {currentUser.lastName}</div>
        </div>

    )
}

export default WelcomeTab
