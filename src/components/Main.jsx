import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Hero from "/components/img/hero.png";
import "./main.css";

export default function Main() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{ mt: "10rem", ml: "5rem", mb: "10rem" }}>
                    <Typography variant="h2" gutterBottom>
                        MIGUEL CARTAGENA
                    </Typography>
                    <Typography variant="subtitle1" className="text">
                        Soy desarrollador frontend con experiencia en proyectos independiente, especializado en React JS. <br />Me apasiona el deporte, especialmente el mundo roller y el Brazilian JiuJitsu. Actualmente estoy abierto a oportunidades para seguir desarrollandome en el mundo laboral.
                    </Typography>
                        <div
                            onClick={() => window.open('https://www.linkedin.com/in/miguelcartagenaa/')}
                            className="rrssItem"
                        ></div>
                        <div
                            onClick={() => window.open('https://github.com/mstrangeletter')}
                            className="rrssItem"
                        ></div>
                        <Link to="./Contact">
                            <div className="rrssItem"></div>
                        </Link>
                        <div className="home-content-wrapper">
                            <div className="home-content-item">
                                <Button
                                    onClick={() => window.open('https://drive.google.com/file/d/1t-H6Ot_8IqLhmBlkzE3B7HqEgV3H9RLu/view?usp=share_link', '_blank')}
                                    variant="contained"
                                    sx={{
                                        mt: "5rem",
                                        m: "5rem",
                                       
                                    }}
                                >
                                    Descarga mi CV
                                </Button>
                                <Link to="/Proyects">
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        sx={{
                                            mt: "5rem",
                                            m: "5rem",                             
                                        }}
                                    >
                                        Mis proyectos
                                    </Button>
                                </Link>
                            </div>
                        </div>                    
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Box className="img-top">
                    <img className="img" src={Hero} alt="Hero Image" />
                </Box>
            </Grid>
        </Grid>
    );
}
