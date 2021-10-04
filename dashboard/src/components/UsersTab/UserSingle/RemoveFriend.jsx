import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';
import { editUser } from './../../../redux/actions/users';

function RemoveFriend({ user, currentuserId }) {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === currentuserId && item.id)

    const replaceFriendArr = (user, id) => {
        user.friends.map((friend, index) => {
            if (friend.user === id) {
                user.friends.splice(index, 1);
            }
            return friend
        });
    }



    const removeFriend = () => {
        if (!window.confirm(`Ви точно хочете користувача ${user.firstName + ' ' + user.lastName} з списку ваших друзів?`)) {
            return
        }
        replaceFriendArr(currentUser, user.id)
        replaceFriendArr(user, currentuserId)
        dispatch(editUser(currentUser));
        dispatch(editUser(user));
        setTimeout(() => {
            alert(`Користувач ${user.firstName + ' ' + user.lastName} був видалений з списку ваших друзів!`)
        }, 1)
    }

    return (
        <span className='remove-friend' onClick={() => removeFriend()}  > Видалити з друзів </span>
    )
}

export default RemoveFriend
