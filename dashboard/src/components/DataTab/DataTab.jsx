import React from 'react'
import { editUser } from './../../redux/actions/users';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';

const DataTab = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === cookies.currentUser.id && item.id)
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [description, setDescription] = React.useState('')

    const setEditUser = () => {
        let changed
        if (firstName.trim() !== '') {
            currentUser.firstName = firstName
            dispatch(editUser(currentUser));
            setFirstName('')
            changed = true
        }
        if (lastName.trim() !== '') {
            currentUser.lastName = lastName
            dispatch(editUser(currentUser));
            setLastName('')
            changed = true
        }
        if (phone.trim() !== '') {
            currentUser.phone = phone
            dispatch(editUser(currentUser));
            setPhone('')
            changed = true
        }

        if (description.trim() !== '') {
            currentUser.description = description
            dispatch(editUser(currentUser));
            setDescription('')
            changed = true
        }

        if (changed) {
            setTimeout(() => {
                alert('Ваша дані успішно змінено!')
            }, 1)
        } else {
            alert('Ви не ввели ніяких даних!')
        }
    }

    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <h3 className="personal__form-title">Дані</h3>
            <div className="personal__line"></div>
            <form action="" className="personal__form">
                <p className="personal__form-text personal__form-text-data">Ім'я</p>
                <input type="text" className="personal__input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Ім'я" />
                <p className="personal__form-text">Ім'я</p>
                <input type="text" className="personal__input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Прізвище" />
                <p className="personal__form-text">Номер телефону</p>
                <input type="text" className="personal__input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Номер телефону" />
                <p className="personal__form-text">Про себе:</p>
                <textarea type="text" className="service__textarea" placeholder="Декілька речень про вас" value={description} onChange={(e) => setDescription(e.target.value)} >  </textarea>
                <input type="button" value="ЗБЕРЕГТИ" className="personal__button" onClick={() => setEditUser()} />
            </form>
        </div>
    )
}

export default DataTab
