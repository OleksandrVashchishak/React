import React from 'react'
import { getWritenUser } from './helper'
const MessageDialog = ({ item, currentUserId, dialog, index, partner }) => {
    return (
        <>
            <span>{getWritenUser(dialog, index, partner, item, currentUserId)}</span>
            <p className={`messages__frame-${item.author === currentUserId ? 'your' : 'coll'}-text`}>
                {item.text}
                <span className="messages__frame-your-date">{item.time}</span>
                <span className="messages__frame-your-status"></span>
            </p>
        </>
    )
}

export default MessageDialog
