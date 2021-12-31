import React, { useState } from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import BebasNeueRegularWoff from '../Fonts/BebasNeue.woff';
import { HashLink as Link } from 'react-router-hash-link';

const Header = (props) => {
    return (
        <React.Fragment>
                <Box>
                    <AppBar position="fixed" style={{ background: "#272727" }}>
                        <Toolbar>
                            <Button style={{ marginRight: '3em'}} color="inherit" fontFamily="inherit"><a href="#home" target="_self">Home</a></Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit"><a href="#projects" target="_self">Projects</a></Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit"><a href="#blog" target="_self">Blog</a></Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit"><a href="#about" target="_self">about</a></Button>
                        </Toolbar>
                    </AppBar>
                </Box>
        </React.Fragment>
    )
}

export default Header;