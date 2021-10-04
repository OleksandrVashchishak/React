import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { editUser } from './../../../redux/actions/users';
import { isFriend, addFriend } from './helper'

function AddFriend({ user, currentuserId }) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === currentuserId && item.id)
    const friendList = user.friends.find((item) => item.user === currentuserId && item)

    return (
        <button className="user-item__add-friend" onClick={() => addFriend(friendList, currentUser, dispatch, user, editUser)} >  {isFriend(friendList)} </button>
    )
}

export default AddFriend
