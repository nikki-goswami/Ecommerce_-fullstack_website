import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from '../reducers/cartReducers';
import { userSlice } from '../reducers/userReducers';

 const store= configureStore({
  reducer: {
    cart:cartSlice,
    user: userSlice
  },
})


export default store;