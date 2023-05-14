import { Box, Typography, Grid } from "@mui/material";
import Hero from "../components/img/hero.png";
import { AutotypeContext } from './Autotype';
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
                    Soy periodista y desarrollador frontend con experiencia en proyectos académicos y de forma independiente, especializado en React JS. <br/>Me apasiona el deporte, especialmente el mundo roller y el Brazilian JiuJitsu. Actualmente estoy buscando mi primera oportunidad como dev frontend junior en el mundo laboral.
                    </Typography>
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
