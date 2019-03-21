// types of action
const Types = {

    OBTAIN_WEATHER:"OBTAIN_WEATHER"
    
  };
  // actions


  const obtainWeather=month=>({
    type: Types.OBTAIN_WEATHER,
    payload:month
  })
  

  
  export default {
    Types,
    obtainWeather
  };