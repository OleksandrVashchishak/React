import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from './../../redux/actions/users';
import { useCookies } from 'react-cookie';

const ChangePassword = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === cookies.currentUser.id && item.id)
    const [oldPass, setOldPass] = React.useState('')
    const [newPass, setNewPass] = React.useState('')

    const changePasword = () => {
        if (currentUser.password === oldPass &&
            newPass.length >= 6 &&
            currentUser.password !== newPass) {
            currentUser.password = newPass
            dispatch(editUser(currentUser));
            setTimeout(() => {
                alert('Ваш пароль успішно змінено')
            }, 1)
        } else if (currentUser.password !== oldPass) {
            alert('Поточний пароль введено невірно')
        } else if (currentUser.password === newPass) {
            alert('Поточний пароль та новий пароль ідентичні')
        } else {
            alert('Введіть коректний пароль')
        }
    };

    return (
        <>
            <p className="personal__less-title">Змінити пароль</p>
            <form className="personal__form">
                <p className="personal__form-text">Поточний пароль</p>
                <input type="password" className="personal__input" placeholder="Поточний пароль" autoComplete="on" value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
                <p className="personal__form-text">Новий пароль. (шість або більше символів)</p>
                <input type="password" className="personal__input" placeholder="Новий пароль" autoComplete="on" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                <input type="button" value="ЗБЕРЕГТИ" onClick={() => changePasword()} className="personal__button" />
            </form>
        </>
    )
}

export default ChangePassword
