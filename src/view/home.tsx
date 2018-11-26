import * as React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../service/common/action';
import rootReducer from '../store/index';

// interface IntState {
//     userList: any,

//   }

const mapStateToProps = (state : rootReducer) => ({
  userListInfo: state.commonReducer.userListInfo,
  
})

class Home extends React.Component {
  // constructor(){
  //   super(null)
  //   this.state = {
  //     userList:""
  //   }
  // }
 


  public render() {


    return (
      <div>
        <div className="container">
          <p> <button onClick={this.addUser}>add</button></p>
        </div>
      </div>
    )
  }
  private addUser = (e: any)  => {

    alert("hello")
    getUserList();
  }

}


export default connect(
  mapStateToProps,
  null
)(Home)
