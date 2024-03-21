import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const RoundAppBar = () => {
    return (
        <AppBar position="static" 
            style={{ 
                borderRadius: '20px',
                width: '70%',
                margin: '15px 0 auto',
            }}
        >
            <Toolbar>
            <Typography variant="h6">My Rounded AppBar</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default RoundAppBar;