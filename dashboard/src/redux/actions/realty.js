import { db } from '../../firebase';


// start add item
export const realty = (realtyItems) => {
  return dispatch => {
    db.collection('realty').add(realtyItems)
  }
};
// end add item

// start set state on load
const updateStateRealty = (realtyItems) => ({
  type: 'UPDATE_STATE_REALTY',
  payload: realtyItems,
});

export const addStateRealty = () => {
  return dispatch => {
    const unsub = db.collection('realty').onSnapshot(snapshot => {
      const allRealty = snapshot.docs.map((item, index) => ({
        dbId: snapshot.docs[index].id,
        id: item.id,
        ...item.data()
      }));
      dispatch(updateStateRealty(allRealty));
    });
    return () => {
      unsub();
    };
  }
};
// end set state on load

// start edit item
export const editRealty = (editItem) => {
  return dispatch => {
    db.collection("realty").doc(editItem.dbId).update(editItem)
  }
}
// end edit item

// start delate item
export const removeRealty = (itemId) => {
  return dispatch => {
    db.collection("realty").doc(itemId).delete()
  }
};
// end delate item









