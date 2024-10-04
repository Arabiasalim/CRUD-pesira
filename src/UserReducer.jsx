import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const UserSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {

    }
})


export default UserSlice.reducer;