import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Equipament } from "../model/equipament";

//define o estado inicial 
export interface EquipamentState {
  equipaments: Equipament[];
  isLoading: true;
  error: any;
}

export const equipamentInitialState: EquipamentState = {
  equipaments: [],
  isLoading: true,
  error: null
};



export const equipamentState = createFeatureSelector<EquipamentState>('equipament');
export const selectedRecords = createSelector(equipamentState, (state: EquipamentState) => state.equipaments);
export const selectIsLoading = createSelector(equipamentState, (state: EquipamentState) => state.isLoading);
export const selectError = createSelector(equipamentState, (state: EquipamentState) => state.error);