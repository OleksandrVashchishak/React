
const checkDialogs = (id, dialogs, currentuserId, history) => {
    const response = dialogs.map(dialog => {
        if ((dialog.author === id ||
            dialog.partner === id) &&
            (dialog.author === currentuserId ||
                dialog.partner === currentuserId)) {
            history.push(`/account/message/id:${dialog._id}`);
            return true
        }
        return false
    });
    return response.includes(true)
}

export const createDialog = (id, dialogs, currentuserId, history, uniqid, dispatch, createNewDialog) => {
    if (checkDialogs(id, dialogs, currentuserId, history)) {
        return
    }
    const newDialog = {
        _id: uniqid(),
        author: currentuserId,
        partner: id,
        messages: []
    }
    dispatch(createNewDialog(newDialog));
    setTimeout(() => {
        history.push(`/account/message/id:${newDialog._id}`);
    }, 1)
}
