import * as React from 'react';

import { Switch,BrowserRouter , Route } from 'react-router-dom';
import Home from './view/home'



class App extends React.Component {
  public render() {
    return (
      <div>
       {/* <Home/> */}
        <BrowserRouter>
          <Switch>
          {/* <Route  path="/Home" render={() => <Home />} />  */}
          
          <Route  path="/Home" component={Home} />
          </Switch>
          </BrowserRouter>

       
      </div>
    );
  }
}

export default App;
