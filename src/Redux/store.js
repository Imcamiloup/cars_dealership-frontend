import { configureStore } from "@reduxjs/toolkit";
import backOrderSlice from "./backOrderSlice";


const store = configureStore({
    reducer: {
        backOrder: backOrderSlice,
    },
});

export default store;