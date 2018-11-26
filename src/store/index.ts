// import { combineReducers } from 'redux';
// import commonReducer from '../service/common/reducer';

// const rootReducer = combineReducers({
//   commonReducer
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import  * as commonReducer  from '../service/common/reducer';

export interface IntRootStore {
 
  commonReducer: commonReducer.State,
 
}




export const rootReducer = combineReducers({

  commonReducer: commonReducer.commonReducer,

});
