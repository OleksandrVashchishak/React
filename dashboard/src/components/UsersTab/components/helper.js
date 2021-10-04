
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


export const isFriend = (friendList) => {
    if (friendList) {
        if (friendList.request && friendList.request) {
            return 'Запит надісланий'
        } else if (friendList.approved) {
            return "Це ваш друг"
        } else if (!friendList.approved) {
            return "Користувач надіслав вам запит"
        }
    } else {
        return "Добавити в друзі"
    }
}



export const addFriend = (friendList, currentUser, dispatch, user, editUser) => {
    if (friendList) return;
    currentUser.friends = [...currentUser.friends, { user: user.id, approved: false }]
    user.friends = [...user.friends, { user: currentUser.id, approved: false, request: true }]
    dispatch(editUser(currentUser));
    dispatch(editUser(user));
    setTimeout(() => {
        alert(`Користувачу ${user.firstName} ${user.lastName} була надіслана заявка в друзі!`)
    }, 1)
}
