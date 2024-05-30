import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/productsApi";
import cartReducer from "../features/cartSlice";
import filterReducer from "../features/filterSlice";
import wishListReducer from "../features/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productFilter: filterReducer,
    wishlist: wishListReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
