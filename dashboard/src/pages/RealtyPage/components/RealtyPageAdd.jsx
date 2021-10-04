import React from 'react'
import pageHeadImg from "../../../assets/img/svg/property-head.svg";
import { useCookies } from 'react-cookie';

const RealtyPageAdd = ({ Link }) => {
    const [cookies] = useCookies(['login']);

    return (
        <>
            {cookies.login && <div className="container">
                <div className="vacancy__head">
                    <img className='vacancy__head--bg' src={pageHeadImg} alt="" />
                    <div className="vacancy__head--info">
                        <p>
                            Тут можна розмістити 2-3 рядка тексту про послуги, або любу іншу важливу інформацію
                        </p>
                        <Link to="/account/add-realty" className="btn-add">
                            ДОБАВИТИ ОГОЛОШЕННЯ
                        </Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default RealtyPageAdd
