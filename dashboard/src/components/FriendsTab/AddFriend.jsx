import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { editUser } from './../../redux/actions/users';

function AddFriend({ user, currentuserId }) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === currentuserId && item.id)
    const friendList = user.friends.find((item) => item.user === currentuserId && item)

    const replaceFriendArr = (user, id) => {
        user.friends.map(friend => {
            if (friend.user === id) {
                friend.approved = true
                if (friend.request && friend.request) {
                    friend.request = false
                }
            }
            return friend
        });
    }

    const addFriend = () => {
        replaceFriendArr(currentUser, user.id)
        replaceFriendArr(user, currentuserId)
        dispatch(editUser(currentUser));
        dispatch(editUser(user));
    }
    return friendList.approved ? <button className="user-item__add-friend"> Ваш друг </button> : <button className="user-item__add-friend" onClick={() => addFriend()} > Добавити </button>
}

export default AddFriend
