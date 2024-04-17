import {createSlice} from '@reduxjs/toolkit';



const backOrderSlice = createSlice({
    name: "backOrder",
    initialState : {
        allBackOrders: [],
        backOrderDetail: {},
        deletedBackOrder: {},
        },
    reducers: {
        getAllBackOrders: (state, action) => {
            state.allBackOrders = action.payload;
        },
        getBackOrderDetail: (state, action) => {
            state.backOrderDetail = action.payload;
        },
        deleteBackOrder: (state, action) => {
            state.deletedBackOrder = action.payload;
        },
    },
});    

export const {getAllBackOrders, getBackOrderDetail, deleteBackOrder } = backOrderSlice.actions;

export default backOrderSlice.reducer;