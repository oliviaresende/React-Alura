import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default ({ open, handleClose, onClose, children, severity }) => (
    <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
    >
        <Alert
            onClose={onClose}
            variant="filled"
            severity={severity}
        >
            {children}
        </Alert>
    </Snackbar>
)