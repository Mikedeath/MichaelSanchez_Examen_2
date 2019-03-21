import React, { Component } from 'react'
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

  
const mapStateToProps = state => ({
    weathers=state.weathers
});
  
const mapDispatchToProps = dispatch => ({
    obtainWeather: date => dispatch(ACTIONS.obtainWeather(date))
});

export default class Weather extends Component {

    constructor() {
        super();
        this.state = {
            date:"",
            
        };
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Weather);