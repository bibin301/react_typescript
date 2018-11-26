

import actionType from './actionType';
import  commonDAO  from '../../model/dao/commonDao';
import { store }   from '../../index';
export const getUserList = () => {
    const CommonDAO: commonDAO = new commonDAO();
    const response = CommonDAO.getUserList();
  
    // response.then(function(result: { status: string, message: string, userList: any[] }) {
    //   if (result.status === 'Success') {
    //     store.dispatch({
    //       type: actionType.LIST_SUCCESS,
    //       PayLoad: result.userList
    //     })
    //   } else {
    //      /* tslint:disable */
    //   console.log('error..')
    //   /* tslint:enable */
         
    //   }
 
    response.then(res => {
       
      store.dispatch({
            payload:res,
            type: actionType.LIST_SUCCESS,
           
          });
        })
       
    
   
  }
 