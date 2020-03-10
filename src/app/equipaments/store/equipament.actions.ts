import { Equipament } from '../model/equipament';
import { Action } from '@ngrx/store';

//parametriza as actions 
export enum EquipamentActionTypes {
    LOAD = '[Equipament] LOAD Requested',
    LOAD_SUCCESS = '[Equipament] LOAD Success',
    CREATE = '[Equipament] CREATE Requested',
    CREATE_SUCCESS = '[Equipament] CREATE Success',
    UPDATE = '[Equipament] UPDATE Requested',
    UPDATE_SUCCESS = '[Equipament] UPDATE Success',
    REMOVE = '[Equipament] REMOVE Requested',
    REMOVE_SUCCESS = '[Equipament] REMOVE Success',
    ERROR = '[Equipament] Error'
}

export class LoadAction implements Action {
    type = EquipamentActionTypes.LOAD;
    constructor(public payload?: any) { }
  }
  
  export class LoadActionSuccess implements Action {
    type = EquipamentActionTypes.LOAD_SUCCESS;
    constructor(public payload: { equipament: Equipament[] }) { }
  }
  
  export class CreateAction implements Action {
    type = EquipamentActionTypes.CREATE;
    constructor(public payload: { equipament: Equipament }) { }
  }
  
  export class CreateActionSuccess implements Action {
    type = EquipamentActionTypes.CREATE_SUCCESS;
    constructor(public payload: { equipament: Equipament }) { }
  }
  
  export class UpdateAction implements Action {
    type = EquipamentActionTypes.UPDATE;
    constructor(public payload: { id: string, equipament: Equipament }) { }
  }
  
  export class UpdateActionSuccess implements Action {
    type = EquipamentActionTypes.UPDATE_SUCCESS;
    constructor(public payload: { equipament: Equipament }) { }
  }
  
  export class RemoveAction implements Action {
    type = EquipamentActionTypes.REMOVE;
    constructor(public payload: { id: string }) { }
  }
  
  export class RemoveActionSuccess implements Action {
    type = EquipamentActionTypes.REMOVE_SUCCESS;
    constructor(public payload: { id: string }) { }
  }
  
  export class ErrorAction implements Action {
    type = EquipamentActionTypes.ERROR;
    constructor(public payload: any) { }
  }
  
  export type EquipamentAction =
    LoadAction | LoadActionSuccess |
    CreateAction | CreateActionSuccess |
    UpdateAction | UpdateActionSuccess |
    RemoveAction | RemoveActionSuccess |
    ErrorAction;