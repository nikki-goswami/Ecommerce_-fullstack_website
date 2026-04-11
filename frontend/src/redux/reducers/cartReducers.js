







import { createSlice, current } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    original_total: 0,
    final_total: 0
    
  },
  reducers: {
    

addToCart : (state, { payload }) => {
  // Check if item already exists in cart
  const existing = state.data.find((item) => item.id === payload.id);

  // Ensure numeric values
  const originalPrice = Number(payload.original_price) || 0;
  const finalPrice = Number(payload.final_price) || 0;

  if (existing) {
    // If already in cart, increase qty
    existing.qty += 1;

    // Update totals for the added quantity
    state.original_total += originalPrice;
    state.final_total += finalPrice;

  } else {
    // Add new item with all required fields
    state.data.push({
      id: payload.id,
      name: payload.name,
      image: payload.image,
      original_price: originalPrice,
      final_price: finalPrice,
      qty: 1,
    });

    // Update totals
    state.original_total += originalPrice;
    state.final_total += finalPrice;
  }


  // Save updated cart in localStorage
  localStorage.setItem("cart", JSON.stringify(state));
},




    changeQuantity: (state, { payload }) => {
      const item = state.data.find((i) => i.id === payload.id)
      if (!item) return

      const originalPrice = Number(item.original_price) || 0
      const finalPrice = Number(item.final_price) || 0

      if (payload.flag === 1) {
        item.qty += 1
        state.original_total += originalPrice
        state.final_total += finalPrice
      }

      if (payload.flag === 2 && item.qty > 1) {
        item.qty -= 1
        state.original_total -= originalPrice
        state.final_total -= finalPrice
      }

      localStorage.setItem('cart', JSON.stringify(state))
    },
  


    removetoCart:(current_state)=>{
      localStorage.removeItem("cart")
      current_state.final_total= 0
      current_state.original_total=0
      current_state.data= []

    
    },

    localStorageToCart: (state) => {
      let stored = null
      try {
        const raw = localStorage.getItem('cart')
        if (raw) stored = JSON.parse(raw)
      } catch (error) {
        localStorage.removeItem('cart')

      }

      if (stored?.data?.length) {
        state.data = stored.data
        state.original_total = 0
        state.final_total = 0
        state.data.forEach((item) => {
          const originalPrice = Number(item.original_price) || 0
          const finalPrice = Number(item.final_price) || 0
          state.original_total += originalPrice * item.qty
          state.final_total += finalPrice * item.qty
        })
      } else {
        state.data = []
        state.original_total = 0
        state.final_total = 0
      }
    },

   deleteCart: (state, action) => {
  const id = action.payload;
  const item = state.data.find((i) => i.id === id);
  if (!item) return;

  const originalPrice = Number(item.original_price) || 0;
  const finalPrice = Number(item.final_price) || 0;

  state.original_total -= originalPrice * item.qty;
  state.final_total -= finalPrice * item.qty;

  state.data = state.data.filter((i) => i.id !== id);

  localStorage.setItem("cart", JSON.stringify(state));
}

  }
})

export const { addToCart, changeQuantity, localStorageToCart,removetoCart,deleteCart } = cartSlice.actions
export default cartSlice.reducer




