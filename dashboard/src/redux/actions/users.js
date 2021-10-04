import { db } from '../../firebase';

const updateStateUsers = (users) => ({
  type: 'SET_USERS',
  payload: users,
});

export const addStateUsers = () => {
  return dispatch => {
    const unsub = db.collection('users').onSnapshot(snapshot => {
      const users = snapshot.docs.map((item, index) => ({
        dbId: snapshot.docs[index].id,
        id: item.id,
        ...item.data()
      }));
      dispatch(updateStateUsers(users));
    });
    return () => {
      unsub();
    };
  }
};

export const addUser = (user) => {
  return dispatch => {
    db.collection('users').add(user)
  }
};

export const editUser = (user) => {
  return dispatch => {
    db.collection("users").doc(user.dbId).update(user)
  }
};


