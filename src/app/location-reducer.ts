import { Action } from "@ngrx/store"; 

export const initialstate = [];
export const SET_LOCATION = 'SET_LOCATION';

export function locationReducer (state = initialstate, action: any) {
    switch (action.type) {
        case SET_LOCATION:
            state = action.payload
            return state;
        default:
            return state;
    }
}