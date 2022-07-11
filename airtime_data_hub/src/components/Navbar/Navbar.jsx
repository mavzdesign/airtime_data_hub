// import React from 'react'
import './Navbar.css'
import nurenta from "../../assets/nurenta.png"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import AiOutlineMail from '@mui/icons-material/Mail';
import {AiOutlineMenu, AiOutlineMail, AiOutlineInbox} from 'react-icons/ai';
import Toolbar from '@mui/material/Toolbar';


export default function Navbar() {


const drawerWidth = 240;


//   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <div className='logocon'>
                    <img src={nurenta} alt="logo"  style={{width:"150px"}}/>
                </div>
                <Divider/>
      <div className='signup-signin'>
                    <span className=' btn btn-main'> Sign in</span>
                    <span className='btn'> Sign up</span>
                
                </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  





  return (
    <div className='navbarcon'>
        <div className='container'>
            <div className='mobile_menu'> 
            <Box sx={{ display: 'flex', backgroundColor:"white" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)`
                    , backgroundColor:"white"
                   
                    
                    },
                    ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <AiOutlineMenu fontSize={30}  style={{color:"var(--main)"}}/>
                    </IconButton>
                    <div style={{display:"flex", justifyContent:"flex-end", width:"100%", padding:"10px"}}>
                    <img src={nurenta} alt="logo"  style={{width:"100px"}}/>
                    </div>
                    {/* <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography> */}
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                    //   container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                
                </Box>
            </Box>

            </div>
      
            <div className='logo_sign_con'>
                <div className='logocon'>
                    <img src={nurenta} alt="logo"  style={{width:"120px"}}/>
                </div>
                <div className='signup-signin'>
                    <span className=' btn btn-main'> Sign in</span>
                    <span className='btn'> Sign up</span>
                
                </div>

            </div>
          


        </div>

    </div>
  )
}
