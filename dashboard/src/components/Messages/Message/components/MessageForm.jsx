import React from 'react'
import { useDispatch } from 'react-redux';
import { sendMessage as actionMessage } from '../../../../redux/actions/dialogs';
import uniqid from 'uniqid';
import MessageEmjoi from './MessageEmjoi';

const MessageForm = ({ dialog, currentUserId }) => {
    const currentDate = new Date()
    const dispatch = useDispatch();
    const [message, setMessage] = React.useState('')

    const sendMessage = () => {
        if (!message.trim()) {
            return
        }

        let messageObj = {
            _id: uniqid(),
            author: currentUserId,
            date: currentDate.getFullYear() + '.0' + (currentDate.getMonth() + 1) + '.' + currentDate.getDate(),
            time: currentDate.getHours() + ':' + currentDate.getMinutes(),
            text: message.trim()
        }
        dialog.messages.push(messageObj)
        dispatch(actionMessage(dialog));
        setMessage('')
    }
    return (
        <div className="messages__send-cont">
            <MessageEmjoi setMessage={setMessage} message={message} />
            <textarea className="messages__textarea" placeholder="Напишіть повідомлення..." value={message} onChange={(e) => setMessage(e.target.value)} >   </textarea>
            <div className="messages__send">
                <div className="messages__btn">
                    <input type="button" value="ВІДПРАВИТИ" className="personal__button" onClick={() => sendMessage()} />
                </div>
            </div>
        </div>
    )
}

export default MessageForm
