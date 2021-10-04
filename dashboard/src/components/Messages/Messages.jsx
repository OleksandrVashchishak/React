import React from 'react'
import MessagesItem from './MessagesItem'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

const Messages = () => {
    const dialogs = useSelector((state) => state.dialogs);
    const users = useSelector((state) => state.users);
    const [cookies] = useCookies();
    const dialogItem = dialogs.filter((dialog) => (dialog.author === cookies.currentUser.id || dialog.partner === cookies.currentUser.id) && dialog)

    return (
        <div className="message-list__container">
            <h3 className="personal__form-title">Повідомлення</h3>
            <div className="personal__line"></div>
            <div className="message-list__sort-cont">
                <div className="message-list__select"  >
                </div>
                <div className="vacancy__resume message-list__checkbox-select">
                </div>
            </div>
           
            {!dialogItem[0] &&  <p className='notice-link' > У вас ще немає ділогів та повідомлень з іншими користувачами. Проте ви завжди можете  <Link to='/account/users'> почати першим! </Link> </p> }
            {dialogItem.map((dialog) => <Link to={`/account/message/id:${dialog._id}`} key={dialog._id}>  <MessagesItem dialog={dialog} currentUserId={cookies.currentUser.id} users={users} /> </Link>)}
        </div>
    )
}

export default Messages
