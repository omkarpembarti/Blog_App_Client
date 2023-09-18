import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { setClose } from '../slices/snackbarSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {

    const snackbarSlice = useSelector((store) => store.snackbarSlice);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setClose())
    };

    return (
        <Snackbar
            anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'right' }}
            open={snackbarSlice.visibility}
            autoHideDuration={4000}
            onClose={handleClose}>
            <Alert severity={snackbarSlice.severity} sx={{ width: '100%' }}>
                {snackbarSlice.message}
            </Alert>
        </Snackbar>

    );
}