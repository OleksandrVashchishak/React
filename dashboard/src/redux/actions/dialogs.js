import { db } from '../../firebase';

export const sendMessage = (dialog) => {
  return dispatch => {
    db.collection("dialogs").doc(dialog.dbId).update(dialog)
  }
};


export const createNewDialog = (dialog) => {
  return dispatch => {
    db.collection('dialogs').add(dialog)
  }
};


const updateStateDialogs = (dialogs) => ({
  type: 'SET_DIALOGS',
  payload: dialogs,
});


export const addStateDialogs = () => {
  return dispatch => {
    const unsub = db.collection('dialogs').onSnapshot(snapshot => {
      const dialogs = snapshot.docs.map((item, index) => ({
        dbId: item.id,
        ...item.data()
      }));
      dispatch(updateStateDialogs(dialogs));
    });
    return () => {
      unsub();
    };
  }
};














