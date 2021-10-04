import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewDialog } from '../../../redux/actions/dialogs';
import avatarDefault from '../../../assets/img/svg/accaunt-cont-ava.svg'
import { useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import uniqid from 'uniqid';
import { createDialog } from '../components/helper'
import AddFriend from '../components/AddFriend';
import RemoveFriend from './RemoveFriend';

const UserSingle = () => {
    const userIdArr = window.location.href.split('id:')
    const userId = userIdArr[userIdArr.length - 1]
    const [cookies] = useCookies();
    const user = useSelector((state) => state.users).find(user => user.id === userId && user)
    const currentuserId = cookies.currentUser.id
    const history = useHistory();
    const dispatch = useDispatch();
    const dialogs = useSelector((state) => state.dialogs);
    const friendList = user.friends.find((item) => item.user === currentuserId && item)
    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>
            <h3 className="personal__form-title">Користувач: {user.firstName + ' ' + user.lastName}</h3>
            <div className="personal__line"></div>
            <div className="user-single__df">
                <div className="user-single__info">
                    <img src={avatarDefault} alt="ava" className="user-single__ava" />
                    <p className="user-single__name">{user.firstName + ' ' + user.lastName}</p>
                    <span className="user-single__contact ">Кoнтактні дані:</span>
                    <div className="user-single__df-info">
                        <span className='user-single__lable'>Телефонний номер:</span> <a href={`tell:${user.phone}`} className='user-single__phone'>  {user.phone}  </a>
                    </div>
                    <div className="user-single__df-info">
                        <span className='user-single__lable'>Емайл:</span>  <a href={`mailto:${user.email}`} className="user-single__email"> {user.email}</a>
                    </div>
                    <span className="user-single__contact">Про себе:</span>
                    <p className="user-single__description">
                        {user.description ? user.description : 'Користувач поки що нічого не написав про себе'}
                    </p>

                </div>

                <div className="user-single__message">
                    <span className="personal__real-add-new" onClick={() => createDialog(user.id, dialogs, currentuserId, history, uniqid, dispatch, createNewDialog)}>
                        <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9772 6.13636H8.8636V1.02273C8.8636 0.45818 8.40541 0 7.84087 0H7.15909C6.59454 0 6.13636 0.45818 
                                6.13636 1.02273V6.13636H1.02273C0.45818 6.13636 0 6.59454 0 7.15909V7.84087C0 8.40541 0.45818 8.8636 1.02273 8.8636H6.13636V13.9772C6.13636
                                 14.5418 6.59454 15 7.15909 15H7.84087C8.40541 15 8.8636 14.5418 8.8636 13.9772V8.8636H13.9772C14.5418 8.8636 15 8.40541 15 7.84087V7.15909C15 6.59454
                                  14.5418 6.13636 13.9772 6.13636Z" fill="white">
                                </path>
                            </svg>
                        </span>
                        <span className="personal__real-add-new-text">Написати повідомлення</span>
                    </span>

                    <div className="single-add-friend">
                        <AddFriend user={user} currentuserId={currentuserId} />
                    </div>

                    <div>
                        {friendList && friendList.approved &&  <RemoveFriend user={user} currentuserId={currentuserId} /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSingle
