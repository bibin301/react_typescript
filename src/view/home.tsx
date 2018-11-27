import * as React from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../service/common/action';
import { IntRootStore } from '../store/rootReducer';

interface IntProps {
  userListInfo: any
}

const mapStateToProps = (state: IntRootStore) => ({
  userListInfo: state.commonReducer.userListInfo,

})

class Home extends React.Component<IntProps> {

  public render() {
    const { userListInfo } = this.props;
    /* tslint:disable */
    console.log('res...', userListInfo)
    /* tslint:enable */


    return (
      <div>
        <div className="container">
          <p> <button onClick={this.addUser}>add</button></p>
        </div>
      </div>
    )
  }
  
  private addUser = (e: any) => {

    alert("hello")
    getUserList();
  }

}

export default connect(
  mapStateToProps,
  null
)(Home)
