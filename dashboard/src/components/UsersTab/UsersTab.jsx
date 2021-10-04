import React from 'react'
import { useSelector } from 'react-redux';
import UsersItem from './components/UsersItem';
import { useCookies } from 'react-cookie';

const UsersTab = () => {
    const [cookies] = useCookies();
    const currentuserId = cookies.currentUser.id
    const users = useSelector((state) => state.users);
    
    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <h3 className="personal__form-title">Користувачі</h3>
            <div className="personal__line"></div>
            <div className="user-items">
                {users.map(user => currentuserId !== user.id ? <UsersItem user={user} key={user.id} users={users} currentuserId={currentuserId} /> : '')}
            </div>
        </div>
    )
}

export default UsersTab
