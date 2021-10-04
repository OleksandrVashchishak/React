import React from 'react'
import avatarDefault from '../../assets/img/svg/accaunt-cont-ava.svg'
import { useDispatch, useSelector } from 'react-redux';
import { createNewDialog } from '../../redux/actions/dialogs';
import { useHistory } from 'react-router-dom'
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { createDialog } from './helper'
import AddFriend from './AddFriend';

function FriendsItem({ user, currentuserId }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const dialogs = useSelector((state) => state.dialogs);

    return (
        <div className='user-item'>
            <Link to={`/account/user/id:${user.id}`} >
                <img src={avatarDefault} alt="" />
                <div className="user-item__names">
                    {user.firstName + ' ' + user.lastName}
                </div>
            </Link>
            <div className="user-item__send" onClick={() => createDialog(user.id, dialogs, currentuserId, history, uniqid, dispatch, createNewDialog)}>
                Надіслати повідомлення
            </div>
            <AddFriend  user={user} currentuserId={currentuserId} />
        </div>
    )
}

export default FriendsItem
