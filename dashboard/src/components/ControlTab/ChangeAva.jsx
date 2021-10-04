import React from 'react'
import avatarDefault from '../../assets/img/svg/accaunt-cont-ava.svg'
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from './../../redux/actions/users';
import { useCookies } from 'react-cookie';

const ChangeAva = () => {
    const dispatch = useDispatch();
    const [cookies] = useCookies();

    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === cookies.currentUser.id && item.id)
    const onChange = imageList => {
        const newUsers = users.map(user => {
            if (parseInt(user.id) === parseInt(currentUser.id)) {
                user.avatar = imageList
            }
            return user
        });
        currentUser.avatar = imageList
        dispatch(editUser(currentUser));
    };

    return (
        <>
         <p className="personal__less-title">Фото профіля</p>
            <ImageUploading value={currentUser.avatar} onChange={onChange} dataURLKey="data_url"  >
                {({ imageList, onImageUpload, onImageUpdate, }) => (
                    <div >
                        {!currentUser.avatar[0] && <button className='change-img-btn' onClick={onImageUpload}><img src={avatarDefault} className="personal__avatar" alt="avatar" /></button>}
                        {imageList.map((image, index) => (
                            <div key={index} className=" personal__ava-change-cont">
                                <img src={image['data_url']} className="personal__avatar" alt="avatar" />
                                <p className="personal__change-ava" onClick={() => onImageUpdate(index)}>ЗМІНИТИ ФОТО</p>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading> </>
    )
}

export default ChangeAva
