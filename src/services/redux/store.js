// src/app/store.js
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
import appReducer from "../redux/reducer/appSlice"; // Import the app reducer
import searchReducer from "../redux/reducer/searchSlice";
import searchResult from "./reducer/searchResult";

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state"); // Get the state from localStorage
    if (serializedState === null) {
      return undefined; // If no state is found, return undefined
    }
    return JSON.parse(serializedState); // Parse and return the state
  } catch (err) {
    return undefined; // If there is an error, return undefined
  }
};

// // Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state); // Serialize the state
    localStorage.setItem("state", serializedState); // Save the serialized state to localStorage
  } catch {
    // Ignore write errors
  }
};

const persistedState = loadState(); // Load the persisted state

// Configure the Redux store
const store = configureStore({
  reducer: {
    app: appReducer, // Use the appReducer for the 'app' slice
    search: searchReducer,
    searchQuery:searchResult
  },
  preloadedState: persistedState, // Preload the state from localStorage
});

store.subscribe(() => {
  saveState(store.getState()); // Save the state to localStorage whenever it changes
});

export default store; // Export the configured store
