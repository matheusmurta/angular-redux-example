import { Equipament } from '../model/equipament';
import { EquipamentAction, EquipamentActionTypes } from './equipament.actions';
import { equipamentInitialState, EquipamentState } from './equipament.state';

//regra de negocio 
export function taskReducer(state = equipamentInitialState, action: EquipamentAction): EquipamentState {

    switch (action.type) {
  
      case EquipamentActionTypes.LOAD_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          error: null,
          equipaments: action.payload.equipaments
        });
  
      case EquipamentActionTypes.CREATE_SUCCESS:
        return Object.assign({}, state, {
          error: null,
          equipaments: [...state.equipaments, action.payload.task]
        });
  
      case EquipamentActionTypes.UPDATE_SUCCESS:
        return Object.assign({}, state, {
          error: null,
          equipaments: state.equipaments.map((task: Equipament) => {
            return task.id === action.payload.id ? action.payload.task : task;
          })
        });
  
      case EquipamentActionTypes.REMOVE_SUCCESS:
        return Object.assign({}, state, {
          error: null,
          equipaments: state.equipaments.filter((task: Equipament) => {
            return task.id !== action.payload.id;
          })
        });
  
      default:
        return state;
    }
  };