import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const [form, setForm] = React.useState({ email: '', password: '' })
    const { loading, request, error } = useHttp()
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    React.useEffect(() => {
        message(error)
    }, [error, message])

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Auth</span>
                        <div>
                            <div className="input-field ">
                                <input placeholder="Email" type="email" className="yellow-input" id='email' name='email' onChange={changeHandler} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field" >
                                <input placeholder="Password" type="password" className="yellow-input" id="password" name='password' onChange={changeHandler} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className='btn yellow darken-4 login-btn' onClick={loginHandler} disabled={loading} > Ligin</button>
                        <button className='btn gray lighten-1 black-text' onClick={registerHandler} disabled={loading} > Registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage