import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Assets/UserSlice';  

const store = configureStore({
  reducer: {
    users: userReducer,  
  },
});

export default store;
