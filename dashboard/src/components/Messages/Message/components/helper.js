export const getWritenUser = (dialog, index, partner, item, currentUserId) => {
    if (index > 0 && dialog.messages[index - 1].author !== currentUserId && item.author === currentUserId) {
        return <p className='messages__frame-your'>Ви:</p>
    } else if (index === 0 && dialog.messages[0].author === currentUserId) {
        return <p className='messages__frame-your'>Ви:</p>
    }
    if (index > 0 && dialog.messages[index - 1].author === currentUserId && item.author !== currentUserId) {
        return <p className='messages__frame-coll'> {partner.firstName + ' ' + partner.lastName + ':'}</p>
    } else if (index === 0 && dialog.messages[0].author !== currentUserId) {
        return <p className='messages__frame-coll'> {partner.firstName + ' ' + partner.lastName + ':'}</p>
    }
}