import { createSlice } from '@reduxjs/toolkit';

const initialUiSlice = {
    notification: null
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiSlice,
    reducers: {
        showNotification(state, action) {
            state.notification = action.payload;
        },
        resetNotification(state) {
            state.notification = null;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;