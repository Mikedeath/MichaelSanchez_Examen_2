import React, { Component } from "react";
import {

    Button

  } from "@material-ui/core";
  import ACTIONS from "../modules/action";
  import  {Link} from "react-router-dom";

  
class Home extends Component{

    constructor(){
        super();
        this.state={
            t1:"Bienvenido",
            t2:"Weather App"
        }
    }
    
    handleSubmit =()=> {
       
         this.setState=({
             t1:"Weather App",
             t2:"Bienvenido"
         });
     
     
    };
    
    render(){
    return(
    <div>
        <h1>{this.state.t1}</h1>
        <br></br>
        <h1>{this.state.t2}</h1>
        <br/>
        <Button  
        variant="contained" 
        align="center" 
        onClick={this.handleSubmit}
        >
        Intercalar
        </Button> 
        <br/>
        <Link to="/">Home></Link>
        <Link to="/weather/:month/:day">Weather></Link>
    </div>
        );
    
    }
    
    
    
    }
      export default Home;