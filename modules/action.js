// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    OBTAIN_WEATHER:"OBTAIN_WEATHER"
    
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });

  const obtainWeather=date=>({
    type: Types.OBTAIN_WEATHER,
    payload:date
  })
  

  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  
  export default {
    createItem,
    deleteItem,
    Types,
    obtainWeather
  };