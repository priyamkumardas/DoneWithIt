import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    origin:null,
    destination:null,
    travelTimeInfo:null
}

export const navSlice=createSlice({
    name:"nav",
    initialState,
    reducer:{
        SetOrigin:(state, action)=>{
            state.origin=action.origin;
        },
        SetDestination:(state,action)=>{
            state.destination=action.destination;
        },
        setTravelTimeInfo:(state,action)=>{
            state.travelTimeInfo=action.travelTimeInfo;
        }
    }
});

export const {SetOrigin, SetDestination, setTravelTimeInfo} = navSlice.actions;

export const selectOrigin = (state)=> state.nav.origin;
export const selectDestination =(state)=>state.nav.destination;
export const selectTravelTime=(state)=> state.nav.travelTimeInfo;


export default navSlice.reducer;