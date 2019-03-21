import React, { Component } from "react";
import {
TextBox,
    Button,
    TextField

  } from "@material-ui/core";
  import ACTIONS from "../modules/action";
  import  {Link} from "react-router-dom";

  
class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            t1:"Bienvenido",
            t2:"Weather App"
        }
    }
    
    handleSubmit =()=> {
        
       if(this.state.t1==="Bienvenido"){
        this.setState=({
            t1:"Weather App",
            t2:"Bienvenido"
        });
       }
        
         else{
            this.setState=({
                t1:"Bienvenido",
                t2:"Weather App"
            });
         }
     
     
    };
    /*Weather for March 20 --> redirecciona a --> '/weather/March/20'
Weather for March 21 --> redirecciona a --> '/weather/March/21'
Weather for March 22 --> redirecciona a --> '/weather/March/22'
Weather for March 23 --> redirecciona a --> '/weather/March/23'*/
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
        <br/>
        <Link to="/weather/March/20">March 20</Link>
        <br/>
        <Link to="/weather/March/21">March 21</Link>
        <br/>
        <Link to="/weather/March/22">March 22</Link>
        <br/>
        <Link to="/weather/March/23">March 23</Link>
    </div>
        );
    
    }
    
    
    
    }
      export default Home;