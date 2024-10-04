import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data"; // Adjust this path if needed

const UserSlice = createSlice({
    name: "users",
    initialState: {
        users: userList, // Initialize state with userList
    },
    reducers: {
        // You can add actions here to handle user-related operations
        addUser: (state, action) => {
            state.users.push(action.payload); // Add a new user
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload); // Delete a user by ID
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload; // Update the user data
            }
        },
    },
});

// Export the actions to use in your components
export const { addUser, deleteUser, updateUser } = UserSlice.actions;

// Export the reducer to configure the store
export default UserSlice.reducer;
