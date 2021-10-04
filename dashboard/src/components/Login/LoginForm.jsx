import React from 'react'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { loginValid, onChangeValid } from './validation.js'

const LoginForm = ({ loginTab }) => {
    const [errorObj, setErrorObj] = React.useState({})
    const [, setCookie] = useCookies();
    const users = useSelector((state) => state.users);
    const [loginization, setLoginization] = React.useState({
        email: '',
        password: '',
    })

    const setLoginValue = (e) => {
        const { name, value } = e.target;
        setLoginization({
            ...loginization,
            [name]: value
        })

        const validObj = onChangeValid(name, value)
        setErrorObj(Object.assign(errorObj, validObj))
    }

    const submitLogin = () => {
        const validObj = loginValid(loginization)

        setErrorObj(validObj)
        if (validObj.isErrors) {
            return
        }

        for (let user of users) {
            if (user.email === loginization.email &&
                user.password === loginization.password) {
                setCookie('login', `user000${user.id}`, { path: '/' });
                setCookie('currentUser', {
                    id: user.id
                }, { path: '/' });
                return
            }
        }
        alert("Undifined login or password");
    }

    return (
        <form className={`log-in-form ${!loginTab ? 'hidden' : ''}`}>
            <p className="log-in-form__text">Для входу в особистий кабінет вам потрібно ввести логін та пароль</p>

            <label htmlFor="login-email" className="field-label">E-mail</label>
            <span className='realty-error-validation'>{errorObj.email}</span>
            <input type="email" autoComplete="on" value={loginization.email} name='email' placeholder="Name@domain.com" onChange={setLoginValue} />

            <label htmlFor="login-password" className="field-label">Пароль</label>
            <span className='realty-error-validation'>{errorObj.password}</span>
            <input type="password" autoComplete="on" name='password' value={loginization.password} placeholder="••••••••" onChange={setLoginValue} />

            <input defaultValue="Увійти" className="submit-btn" onClick={() => submitLogin()} />
        </form>
    )
}

export default LoginForm
