import {createSlice} from '@reduxjs/toolkit';



const backOrderSlice = createSlice({
    name: "backOrder",
    initialState : {
        allBackOrders: [],
        backOrderDetail: {},
        },
    reducers: {
        getAllBackOrders: (state, action) => {
            state.allBackOrders = action.payload;
        },
        getBackOrderDetail: (state, action) => {
            state.backOrderDetail = action.payload;
        },
    },
});    

export const {getAllBackOrders, getBackOrderDetail} = backOrderSlice.actions;

export default backOrderSlice.reducer;