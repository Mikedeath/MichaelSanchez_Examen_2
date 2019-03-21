import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {  
  weatheritems:[{month:'March', day:'20', max: '38', min: '18'}, {month:'March', day:'21', max: '30', min: '20'}, 
  {month:'March', day:'22', max: '33', min: '17'}, {month:'March', day:'23', max: '31', min: '19'}]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }
case ACTIONS.Types.CHANGE_CODE_NAME:{
  //console.log(action);
    let newState = _.cloneDeep(state);
    if(state.code==="Bienvenido a Project Code Names"){
    newState.code="813N83N1D0 4 PR0J3CT C0D3 N4M3";
    }
   else{
     newState.code="Bienvenido a Project Code Names";

    }
   return newState
}

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

    }
  
    default:
      return state;
  }

};

export default todoReducer;