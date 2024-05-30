import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      state.wishList.push(action.payload);
    },
    removeFromWishList(state, action) {
      const newWishList = state.wishList.filter(
        (product) => product?.id !== action.payload.id
      );
      state.wishList = newWishList;
    },
    removeAll(state, action) {
      state.wishList = [];
    },
  },
});

export default wishListSlice.reducer;

export const { addToWishList, removeFromWishList, removeAll } =
  wishListSlice.actions;
