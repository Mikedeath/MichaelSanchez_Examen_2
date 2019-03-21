import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router,Link, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import Home from "./components/Home"


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    
    <Switch>
      <Route  path="/" exact component={Home}/>
     
    </Switch>
   
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;