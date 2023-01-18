import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      let itemIndex = state.carts?.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        console.log(state.carts[itemIndex].cardQuantity);
        if (state.carts[itemIndex].cardQuantity >= 10) {
          alert("success 10");
        } else {
          state.carts[itemIndex].cardQuantity += 1;
          // alert("success");
        }
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        state.carts.push(tempProduct);
        // alert("success addded");
      }
    },
    removeFromCart: (state, action) => {
      let arr = state.carts.filter((item) => item.id !== action.payload.id);
      state.carts = arr;
      // alert("removed successfully.");
    },

    decreaseQuantity: (state, action) => {
      let itemIndex = state.carts?.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log({ itemIndex });

      if (itemIndex >= 0 && action.payload.cardQuantity > 1) {
        state.carts[itemIndex].cardQuantity -= 1;
      } else {
        let arr = state.carts.filter((item) => item.id !== action.payload.id);
        state.carts = arr;
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
