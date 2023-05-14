import { ThemeProvider, createTheme, AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import "../navbar/navbar.css";




export default function Navbar() {
    const[open, setOpen] = useState(false);
    const[hover, setHover] = useState(false);

    const handleHover = (value) => {
        setHover(value);
    };
    
    const theme = createTheme({
        palette: {
            secondary: {
                light: 'rgb(71,71,71)',
                main: '#143355',
                dark: '#ba000d',
                contrastText: '#fff',
            },
        }
    });
return (
        <>
            <ThemeProvider theme={theme}>

            <AppBar 
            position="static" 
            className={!hover ? "navbar-transparent" : ""} 
            color="secondary" 
            onMouseEnter={() => handleHover(true)} 
            onMouseLeave={() => handleHover(false)}
            elevation={hover ? 4 : 0} 
            >

                    <Toolbar>
                        <IconButton
                            onClick={() => setOpen(true)}
                            color="inherit"
                            size="large"
                        >
                            <MenuIcon sx={{
                                color: '#fff',
                            }} />
                        </IconButton>
                        <RollerSkatingIcon color="inherit" porition="" sx={{
                            pr: 2,
                            pl: 2
                        }} />
                        <Typography variant="h5" sx={{
                            color: '#fff',
                            flexGrow: 1
                        }}> Webeloper</Typography>

                        <Link to="/">
                            <Button sx={{
                                color: "white",
                            }}
                                component="a">Home</Button>
                        </Link>

                        <Link to="/Proyects">
                            <Button
                                sx={{
                                    color: "white",
                                }}
                                component="a"
                                color="inherit">Proyectos</Button>
                        </Link>

                        <Link to="/Contact">
                            <Button
                                sx={{
                                    color: "white",
                                }}
                                component="a"
                                color="inherit">Contacto</Button>
                        </Link>


                    </Toolbar>
                </AppBar>
            </ThemeProvider>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >

                <NavListDrawer />
            </Drawer>


        </>

    )
}