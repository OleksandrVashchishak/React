import React from 'react'

const MessagesItem = ({ dialog, currentUserId, users }) => {
    const [partner, setPartner] = React.useState({})

    React.useEffect(() => {
        if (dialog.author !== currentUserId) {
            const [currentUser] = users.filter((user) => user.id === dialog.author && user)
            setPartner(currentUser)
        } else {
            const [currentUser] = users.filter((user) => user.id === dialog.partner && user)
            setPartner(currentUser)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!partner) {
        setPartner({
            firstName: 'Видалений',
            lastName: 'користувач'
        })
    }
    return (
        <div className="message-list__item message-list__news">
            <div className="message-list__checkbox">
                {partner && <label className="message__list-label"> {`${partner.firstName} ${partner.lastName}`}  </label>}
            </div>

            <div className="message-list__advent-cont">
                <p className="message-list__advent-text">{dialog.messages.length !== 0 && dialog.messages[dialog.messages.length - 1].text}</p>
            </div>
            <p className="message-list__advent-date">{dialog.messages.length !== 0 && dialog.messages[dialog.messages.length - 1].time}</p>
        </div>
    )
}

export default MessagesItem
