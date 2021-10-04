import React from 'react'
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { createNewDialog, sendMessage } from '../../../redux/actions/dialogs';
import uniqid from 'uniqid';
import { createDialog } from './helper'
import { useHistory } from 'react-router-dom'

const SingleRealtyForm = ({ userId, item }) => {
    const [cookies] = useCookies(['login']);
    const [message, setMessage] = React.useState('Добого дня! Мене зацікавила пропозиція - "' + item.nameRealty + '"  . Ми можемо обговорити деталі?')
    const dispatch = useDispatch();
    const dialogs = useSelector((state) => state.dialogs);
    const history = useHistory();
    return (
        <div className="open-notice__body-contact open-notice__container-shadow">
            <p className="open-notice__data open-notice__imp">
                {cookies.login && 'Для звязяку з продавцем ви можете надіслати йому повідомлення'}
                {!cookies.login && 'Вам потрібно авторизуватись, або зареєструватись для того щоб надіслати продавцю повідомлення'}
            </p>
            <div className="open-notice__body-input">
                <p className="personal__form-text open-notice__body-input-text">Повідомлення</p>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                    className="personal__input open-notice__textarea"></textarea>
                {!cookies.login && <input type="button" defaultValue="Відправити" className={`personal__button personal__button-add-realty btn-opacity`} />}
                {cookies.login && <input type="button" defaultValue="Відправити" className={`personal__button personal__button-add-realty `}
                    onClick={() => createDialog(userId, dialogs, cookies.currentUser.id, history, uniqid, dispatch, createNewDialog, message, sendMessage)}
                />}
            </div>
        </div>
    )
}

export default SingleRealtyForm
