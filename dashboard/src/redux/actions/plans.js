import { db } from '../../firebase';

// start add item
export const addPlan = (plan) => {
  return dispatch => {
    db.collection('plans').add(plan)
  }
};
// end add item



// start set state on load
const updateStatePlans = (plans) => ({
  type: 'UPDATE_STATE_PlAN',
  payload: plans,
});

export const addStatePlans = () => {
  return dispatch => {
    const unsub = db.collection('plans').onSnapshot(snapshot => {
      const allPlans = snapshot.docs.map((item, index) => ({
        dbId: snapshot.docs[index].id,
        id: item.id,
        ...item.data()
      }));
      dispatch(updateStatePlans(allPlans));
    });
    return () => {
      unsub();
    };
  }
};
// end set state on load







