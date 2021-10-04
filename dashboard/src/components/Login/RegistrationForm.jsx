import React from 'react'
import { setLoginPopup } from './../../redux/actions/loginPopup';
import { addUser } from './../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { registerValid, onChangeValid } from './validation.js'
import uniqid from 'uniqid';

const RegistrationForm = ({ loginTab }) => {
  const [, setCookie] = useCookies();
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const [user, setUser] = React.useState({
    id: uniqid(),
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    email: '',
    avatar: [],
    friends: [],
  })

  const [errorObj, setErrorObj] = React.useState({})

  const setUserValue = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
    const validObj = onChangeValid(name, value)
    setErrorObj(Object.assign(errorObj, validObj))
  }

  const setStateUser = () => {
    const validObj = registerValid(user)

    setErrorObj(validObj)
    if (validObj.isErrors) {
      return
    }


    for (let userItem of usersState) {
      if (userItem.email === user.email) {
        alert('Такий емайл вже використовується на сайті')
        return
      }
    }

    dispatch(addUser(user));
    setCookie('login', `user000${user.id}`, { path: '/' });
    setCookie('currentUser', {
      id: user.id
    }, { path: '/' });
    setTimeout(() => {
      alert(`Ви успішно зареєструвались на сайті!`)
    }, 0)
  }

  return (
    <div className={`second-reg-form form-user ${loginTab ? 'hidden' : ''}`}>
      <p className="second-reg-form__text">Для рестрації на сайті вам потрібні наступні дані</p>

      <label htmlFor="user-phone" className="field-label">Номер телефона</label>
      <span className='realty-error-validation'>{errorObj.phone && errorObj.phone}</span>
      <input type="number" id="user-phone" name='phone' value={user.phone} placeholder="+48 954 285 295" onChange={setUserValue} />

      <label htmlFor="user-mail" className="field-label">E-mail</label>
      <span className='realty-error-validation'>{errorObj.email && errorObj.email}</span>
      <input type="email" id="user-mail" name='email' placeholder="ilon@gmail.com" onChange={setUserValue} />

      <label htmlFor="user-first-name" className="field-label">Ім"я</label>
      <span className='realty-error-validation'>{errorObj.firstName && errorObj.firstName}</span>
      <input type="text" id="user-first-name" name='firstName' placeholder="Ілон" onChange={setUserValue} />

      <label htmlFor="user-last-name" className="field-label">Прізвище</label>
      <span className='realty-error-validation'>{errorObj.lastName && errorObj.lastName}</span>
      <input type="text" id="user-last-name" name='lastName' placeholder="Маск" onChange={setUserValue} />

      <label htmlFor="user-password" className="field-label">Пароль (Не менше шести символів)</label>
      <span className='realty-error-validation'>{errorObj.password && errorObj.password}</span>
      <input autoComplete="on" type="password" name='password' id="user-password" placeholder="••••••••" onChange={setUserValue} />

      <div className="second-reg-form__submit-wrap">
        <button className="reg-reset-btn" onClick={() => dispatch(setLoginPopup(false))} >Відмінити</button>
        <button className="submit-btn reg-submit-btn" onClick={setStateUser}>Зареєструватись</button>
      </div>

    </div>
  )
}

export default RegistrationForm
