const sendMessage = (currentUserId, uniqid, message, dialog, dispatch, sendActionMessage) => {
    const currentDate = new Date()
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
    dispatch(sendActionMessage(dialog));
}

const checkDialogs = (id, dialogs, currentuserId, history, uniqid, message, dispatch, sendActionMessage) => {
    const response = dialogs.map(dialog => {
        if ((dialog.author === id ||
            dialog.partner === id) &&
            (dialog.author === currentuserId ||
                dialog.partner === currentuserId)) {
            sendMessage(currentuserId, uniqid, message, dialog, dispatch, sendActionMessage)
            history.push(`/account/message/id:${dialog._id}`);
            return true
        }
        return false
    });
    return response.includes(true)
}

export const createDialog = (id, dialogs, currentuserId, history, uniqid, dispatch, createNewDialog, message, sendMessage) => {
    if (checkDialogs(id, dialogs, currentuserId, history, uniqid, message, dispatch, sendMessage)) {
        return
    }
    const currentDate = new Date()
    const newDialog = {
        _id: uniqid(),
        author: currentuserId,
        partner: id,
        messages: [
            {
                _id: uniqid(),
                author: currentuserId,
                date: currentDate.getFullYear() + '.0' + (currentDate.getMonth() + 1) + '.' + currentDate.getDate(),
                time: currentDate.getHours() + ':' + currentDate.getMinutes(),
                text: message.trim()
            }
        ]
    }
    dispatch(createNewDialog(newDialog));
    setTimeout(() => {
        history.push(`/account/message/id:${newDialog._id}`);
    }, 1)
}