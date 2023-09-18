import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    message: 'No Message',
    severity: 'success',
    visibility: false
}

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: initialState,
    reducers: {
        setOpen(state, action) {
            state.visibility = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity ? action.payload.severity : 'success';
        },
        setClose(state, action) {
            state.visibility = false;
        }

    }
});


export const { setOpen, setClose } = snackbarSlice.actions;
export default snackbarSlice.reducer;