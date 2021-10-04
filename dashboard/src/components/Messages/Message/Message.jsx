import React from 'react'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { MessageForm, MessageHeader, MessageDialog } from './components';

const Message = () => {
    const [cookies] = useCookies();
    const [partner, setPartner] = React.useState({})
    const users = useSelector((state) => state.users);
    const dialogIdArr = window.location.href.split('id:')
    const dialogId = dialogIdArr[dialogIdArr.length - 1]
    const dialog = useSelector((state) => state.dialogs).find((dialog) => dialog._id === dialogId && dialog)
    const currentUserId = cookies.currentUser.id
    React.useEffect(() => {
        if (dialog && dialog.author !== currentUserId) {
            const [currentUser] = users.filter((user) => user.id === dialog.author && user)
            setPartner(currentUser)
        } else if (dialog && dialog.partner !== currentUserId) {
            const [currentUser] = users.filter((user) => user.id === dialog.partner && user)
            setPartner(currentUser)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dialog])


    if (!partner) {
        setPartner({
            firstName: 'Видалений',
            lastName: 'користувач',
            isDelated: true
        })
    }

    return (
        <>
            {dialog &&
                <div className="messag-test">
                    <MessageHeader partner={partner} />
                    <div className="messages__container">
                        <div className="messages__frame-cont">
                            {dialog.messages.map((item, index) => <MessageDialog key={item._id} dialog={dialog} partner={partner} index={index} item={item} currentUserId={currentUserId} />)}
                        </div>
                        <MessageForm dialog={dialog} currentUserId={currentUserId} partner={partner} />
                    </div>
                </div>
            }
            {!dialog &&
                <div className="preload-block__wrapper">
                    <div className="preload-block">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                        <span>Loading</span>
                    </div>
                </div>
            }
        </>
    )
}

export default Message
