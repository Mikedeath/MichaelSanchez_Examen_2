import React, { Component } from 'react'
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

 /* 
const mapStateToProps = state => ({
    weathers=state.weathers
});
  */
const mapDispatchToProps = dispatch => ({
    obtainWeather: month => dispatch(ACTIONS.obtainWeather(month))
});

class Weather extends Component {

    constructor() {
        super();
        this.state = {
            month:"",
            
        };
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default connect( mapDispatchToProps)(Weather);