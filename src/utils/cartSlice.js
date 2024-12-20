import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  reducers:{
    addItem:(state, action)=>{
      // Redux Toolkit
      // mutating the state over here
      // we have to mutate the state
      // Redux Toolkit uses immer Behind the scenes(BTS)
      state.items.push(action.payload);
    },
    removeItem:(state, action)=>{
      state.items.pop();
    },
    clearCart:(state,action)=>{
      state.items.length =0; //[]
      //state=[]; => this will not work
    },
  },
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;