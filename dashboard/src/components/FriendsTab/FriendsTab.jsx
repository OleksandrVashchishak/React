import React from 'react'
import { useSelector } from 'react-redux';
import FriendsItem from './FriendsItem';
import { useCookies } from 'react-cookie';

const FriendsTab = () => {
    const [cookies] = useCookies();
    const currentuserId = cookies.currentUser.id

    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === currentuserId && item.id)

    const friendsId = currentUser.friends.filter((item) => item.request && item)
    const requests = []
    users.forEach(user => friendsId.forEach(friend => (user.id === friend.user) && friend.request ? requests.push(user) : ''));

    const allFriends = currentUser.friends.filter((item) => item.approved && item)
    const myFriends = []
    users.forEach(user => allFriends.forEach(friend => (user.id === friend.user) && friend.approved ? myFriends.push(user) : ''));

    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>

            <h3 className="personal__form-title">Мої друзі</h3>
            <div className="personal__line"></div>
            <div className="user-items">
                {!myFriends[0] && <p className='no-request'>Ви поки-що нікого не добавили в друзі</p>}
                {myFriends.map(user => currentuserId !== user.id ? <FriendsItem user={user} key={user.id} users={users} currentuserId={currentuserId} /> : '')}
            </div>

            <h3 className="personal__form-title">Запити в друзі</h3>
            <div className="personal__line"></div>
            <div className="user-items">
                {!requests[0] && <p className='no-request'>У вас поки що немає нових запитів дружби</p>}
                {requests.map(user => (
                    currentuserId !== user.id ? <FriendsItem user={user} key={user.id} users={users} currentuserId={currentuserId} /> : ''))}
            </div>
        </div>
    )
}

export default FriendsTab
