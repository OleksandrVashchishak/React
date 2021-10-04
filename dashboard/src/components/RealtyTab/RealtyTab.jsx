import React from 'react'
import RealtyItem from './RealtyItem'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const RealtyTab = () => {
    const { realtyItems } = useSelector((state) => state.realty);
    const [cookies] = useCookies();
    const currentUserRealty = realtyItems.filter((item) => item.userId === cookies.currentUser.id && item.userId)

    return (
        <div className="personal__frame-cont personal__frame-cont-re">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <h3 className="personal__form-title">Нерухомість</h3>

            <div className="personal__line personal__line-realty"></div>
            <Link to="/account/add-realty">  <span className="personal__real-add-new">
                <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9772 6.13636H8.8636V1.02273C8.8636 0.45818 8.40541 0 7.84087 0H7.15909C6.59454 0 6.13636 0.45818 6.13636 1.02273V6.13636H1.02273C0.45818 6.13636 0 6.59454 0 7.15909V7.84087C0 8.40541 0.45818 8.8636 1.02273 8.8636H6.13636V13.9772C6.13636 14.5418 6.59454 15 7.15909 15H7.84087C8.40541 15 8.8636 14.5418 8.8636 13.9772V8.8636H13.9772C14.5418 8.8636 15 8.40541 15 7.84087V7.15909C15 6.59454 14.5418 6.13636 13.9772 6.13636Z" fill="white" />
                </svg>
                </span>
                <span className="personal__real-add-new-text">
                    добавити об'яву
                </span>
            </span>  </Link>
            <div className="personal__real-table-cont">
                <div className="personal__real-table">
                    <div className="personal__real-table-item">
                        <div className="personal__real-col personal__real-col-numb">№</div>
                        <div className="personal__real-col personal__real-col-nam">Пропозиція</div>
                        <div className="personal__real-col personal__real-col-ca">Категорія</div>
                        <div className="personal__real-col personal__real-col-dat">Ціна</div>
                        <div className="personal__real-col personal__real-col-edi">Редагувати</div>
                    </div>

                    {!currentUserRealty[0] && <p className='notice-link-realty'> Ви ще не <Link to='/account/add-realty'> добавили </Link> оголошень. Клікніть по кнопці вище щоб <Link to='/account/add-realty'> добавити! </Link> </p>}
                    { currentUserRealty.map((item, index) => (
                            <RealtyItem key={item.id} item={item} allItems={realtyItems} numberCounter={index + 1} />
                        ))}

                </div>
            </div>
        </div>
    )
}

export default RealtyTab
