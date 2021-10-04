import React from 'react'
import { Route } from 'react-router-dom';
import Account from './Account';
import { Header, Footer, Login } from './components'
import RealtyPage from './pages/RealtyPage/RealtyPage'
import SingleRealty from './pages/SingleRealty/SingleRealty'
import { useCookies } from 'react-cookie';
import { addStateRealty } from './redux/actions/realty';
import { addStatePlans } from './redux/actions/plans';
import { addStateUsers } from './redux/actions/users';
import { addStateDialogs } from './redux/actions/dialogs';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(['login']);

  React.useEffect(() => {
    dispatch(addStateRealty());
    dispatch(addStatePlans());
    dispatch(addStateUsers());
    dispatch(addStateDialogs());
  }, [dispatch]);

  return (
    <>
      <Header />
      {cookies.login && <Route path="/account" component={Account} />}
      <main>
        <Route path="/" component={RealtyPage} exact />
        <Route path="/realty" component={SingleRealty} />
      </main>
      <Footer />
      <Login />
    </>
  );
}

export default App;
