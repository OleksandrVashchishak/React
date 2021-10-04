import React from 'react'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import PlanItem from './PlanItem';
import { Link } from 'react-router-dom';

const PlanTab = () => {
    const [cookies] = useCookies();
    const plans = useSelector((state) => state.plans);

    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <h3 className="personal__form-title">Шаблони</h3>
            <div className="personal__line"></div>
            <p className='create-plan-alert' >Нові шаблони ви можете створити в <Link to="/account/construct">Конструкторі шаблонів </Link></p>
            <div className="item-plan-tabs">
                {plans.map((item, index) => item.userId === cookies.currentUser.id && <PlanItem key={index} item={item} />)}
            </div>

        </div>
    )
}

export default PlanTab
