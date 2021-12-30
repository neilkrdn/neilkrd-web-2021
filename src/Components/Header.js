import React, { useState } from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import BebasNeueRegularWoff from '../Fonts/BebasNeue.woff';

const Header = (props) => {
    return (
        <React.Fragment>
                <Box>
                    <AppBar position="static" style={{ background: "#272727" }}>
                        <Toolbar>
                            <Button style={{ marginRight: '3em'}} color="inherit" fontFamily="inherit">Home</Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit">Projects</Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit">Blog</Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit">About</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
        </React.Fragment>
    )
}

export default Header