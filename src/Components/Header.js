import React, { useState } from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { HashLink as Link } from 'react-router-hash-link';

const Header = (props) => {
    return (
        <React.Fragment>
                <Box>
                    <AppBar position="fixed" style={{ background: "#272727" }}>
                        <Toolbar>
                            <Button style={{ marginRight: '3em'}} color="inherit" fontFamily="inherit"><Link to="/home#intro">Home</Link></Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit"><Link to="/home#projects">Projects</Link></Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit"><Link to="/home#blog">Blog</Link></Button>
                            <Button style={{ marginRight: '3em' }} color="inherit" fontFamily="inherit"><Link to="/home#about">About</Link></Button>
                       {/*    <Button style={{ justifyContent: "flex-end", alignItems: "flex-end"}} color="inherit" fontFamily="inherit"><a href="login" target="_self" >Login</a></Button>*/} 
                        </Toolbar>
                    </AppBar>
                </Box>
        </React.Fragment>
    )
}

export default Header;