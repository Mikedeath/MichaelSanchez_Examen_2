import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {  
  weatheritems:[{month:'March', day:'20', max: '38', min: '18'}, {month:'March', day:'21', max: '30', min: '20'}, 
  {month:'March', day:'22', max: '33', min: '17'}, {month:'March', day:'23', max: '31', min: '19'}]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    


    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    case ACTIONS.Types.OBTAIN_WEATHER:{
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let date = _.findIndex(newState.weatheritems, { month: action.payload });
      //No se como poner que a partir del index se muestre max y min aqui abajo
      //newState.weatheritems.map()
      
      return newState;
    }
  
    default:
      return state;
  }

};

export default todoReducer;