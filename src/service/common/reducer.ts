
import actionType from './actionType';


export interface IntState  {
  userListInfo: any,

};

interface IntActionType{
  type: actionType,
  payload: any
}

const initialState: IntState = {
    userListInfo: null,
 
}



export function commonReducer(state: IntState = initialState, action: IntActionType) {
  switch (action.type) {

  
    case actionType.LIST_SUCCESS:
      return {
        ...state,
        userListInfo: action.payload[0],
       
      }
    default:
      return state
  }
}

export default commonReducer;
