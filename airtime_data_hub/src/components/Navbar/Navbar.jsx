// import React from 'react'
import './Navbar.css'
import nurenta from "../../assets/nurenta.png"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {AiOutlineMenu} from 'react-icons/ai';
import Toolbar from '@mui/material/Toolbar';
import { useState, useEffect } from 'react';
import Banner from '../Banner/Banner';
import { NavLink  } from "react-router-dom";




export default function Navbar() {
    const changeBackground = () =>{
        if (window.scrollY >= 80 ){
          setFlexNavbar(true)
        }else{
          setFlexNavbar(false);
        }
    
      };
      window.addEventListener('scroll',changeBackground);

      const [flexNavbar, setFlexNavbar]= useState(false)


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
                   <NavLink to="/"><img src={nurenta} alt="logo"  style={{width:"150px"}}/></NavLink> 
    </div>
        <Divider/>
            <div className='sidenavmob'>
                <ul>
                    <NavLink  to="/"><li>Home</li></NavLink >
                    <NavLink to="/about_nurenta" ><li>About</li></NavLink >
                    <NavLink to="/how_it_works" ><li> How it works</li></NavLink >
                    <NavLink to="/faq" ><li> FAQs</li></NavLink >
                    <NavLink to="/contact_us" ><li> Contact us</li></NavLink >
                </ul>
            </div>
      <div className='signup-signin'>
                    <span className=' btn btn-main'> Sign in</span>
                    <span className='btn'> Sign up</span>
                
        </div>
    </div>
  );
  const [navbackround, setnavbackround] = useState(false)

//   const container = window !== undefined ? () => window().document.body : undefined;
useEffect(() => {
    handleScroll();

  

 
  
}, [])


const handleScroll = () => {
       
    if (window.scrollY > 100) {
        setnavbackround(true)
    } else {
        setnavbackround(false)
    }
}



  





  return (

    <div>
        <div className= {flexNavbar ? "navbarconx" : "navbarcon" }>
            <div className='container'>
            
        
                <div className='logo_sign_con'>
                    <div className='logocon'>
                    <NavLink to="/"><img src={nurenta} alt="logo"  style={{width:"120px"}}/></NavLink> 
                    </div>
                    <div className='logo_list'>
                        <ul>
                            <NavLink  to="/"><li>Home</li></NavLink >
                            <NavLink to="/about_nurenta" ><li>About</li></NavLink >
                            <NavLink to="/how_it_works" ><li> How it works</li></NavLink >
                            <NavLink to="/faq" ><li> FAQs</li></NavLink >
                            <NavLink to="/contact_us" ><li> Contact us</li></NavLink >
                        </ul>
                    </div>
                    <div className='signup-signin'>
                        <span className=' btn btn-main'> Sign in</span>
                        <span className='btn'> Sign up</span>
                    
                    </div>

                </div>
            


            </div>
        </div>

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
                        
                        <div style={{display:"flex", justifyContent:"flex-start", width:"100%", padding:"10px"}}>
                        <img src={nurenta} alt="logo"  style={{width:"100px"}}/>
                        </div>
                    

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <AiOutlineMenu fontSize={30}  style={{color:"var(--main)"}}/>
                        </IconButton>
                    
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                    
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

        </div>
       

    </div>
   
  )
}
