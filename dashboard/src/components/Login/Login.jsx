import React from 'react'
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [cookies] = useCookies(['login']);
  const loginPopup = useSelector((state) => state.loginPopup);

  return (
    <>
      {!cookies.login &&
        <section className={`overlay sign-overlay ${loginPopup.open ? 'sign-overlay--open' : 'visually-hidden'}`}>
          <div className="sign-wrap">
            <Navigation loginTab={loginPopup.loginForm} />
            <LoginForm loginTab={loginPopup.loginForm} />
            <RegistrationForm loginTab={loginPopup.loginForm} />
          </div>
        </section>}
    </>
  )
}

export default Login
