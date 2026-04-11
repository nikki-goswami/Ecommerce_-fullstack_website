// import { createSlice } from '@reduxjs/toolkit'

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     data: [],
//     original_total:0,
//     final_total:0,
//     discount_percentage:0,
//     qty:0


//   },
//   reducers: {
//     addToCart:(current_state,{payload})=>{
//         //console.log(payload)
//         current_state.data.push({...payload , qty:1})
//         current_state.original_total += payload.original_price;
//         current_state.final_total += payload.final_price;

//         localStorage.setItem("cart",JSON.stringify(current_state));

//     },
//     removeToCart:()=>{
        
//     },
//     changeQuantity:(current_state,{payload})=>{
//         //console.log(payload)
//         const findCardItem= current_state.data.find((item)=>item.id == payload.id);
//         if(findCardItem){
//             if(payload.flag==1){
//                 findCardItem.qty++
//                 current_state.original_total += payload.original_price;
//         current_state.final_total += payload.final_price;

//             }
//             else{
//                 findCardItem.qty--
//                 current_state.original_total -= payload.original_price;
//         current_state.final_total -= payload.final_price;

//             }
//         }
//          localStorage.setItem("cart",JSON.stringify(current_state));
//     },

//     localStorageToCart:(current_state)=>{

//       const localStoragecart= JSON.parse(localStorage.getItem("cart"));

//       if(localStoragecart){
//         current_state.data = localStoragecart.data;
//         current_state.final_total = localStoragecart.final_total;
//         current_state.original_total = localStoragecart.original_total

//       }
//       console.log(localStorageToCart)


//     }
   
//   },
// })

// // Action creators are generated for each case reducer function
// export const {addToCart,removeToCart,changeQuantity,localStorageToCart  } = cartSlice.actions

// export default cartSlice.reducer

// paste code  
//   export const cookiesgetdata = createAsyncThunk(
//   "authgetuser",
//   async()=>{
//     try {
//    const respone=  await axiosbaseURL.get("/userlogin/getcookies")
//  console.log(respone)
       
//     } catch (error) {
      
//     }
//   }
//)


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isLogin: false
    
  },
  reducers: {

  }  
});

export const {} = userSlice.actions;

export default userSlice.reducer;


