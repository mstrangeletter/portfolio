import { Box } from "@mui/system"
import { Link } from "react-router-dom";
import Main from "./Main";
import "../components/home.css";
import HTML from "../components/img/HTML.png";
import CSS from "../components/img/CSS.png";
import JS from "../components/img/JS.png";
import TS from "../components/img/TS.png";
import Python from "../components/img/Python.png";
import Bootstrap from "../components/img/bootstrap.png";
import Mui from "../components/img/materialui.png";
import Tailwind from "../components/img/tailwind.png";
import React from "../components/img/React.png";
import Next from "../components/img/nextjs.png";
import Figma from "../components/img/figma.png";
import Adobe from "../components/img/adobe.png";
import Git from "../components/img/git.png";
import Vscode from "../components/img/vscode.png";
import Jira from "../components/img/jira.png";
import Study from "../components/img/study.jpeg";
import { Button, Grid, Typography } from "@mui/material";

export default function Home() {

    return (
        <div className="home">
            <Main />
            <div className="home-wrapper">
                <div className="home-logo">

                </div>
                <div style={
                    {
                        'background-color': '#e0e0e0',
                        'height': "84rem",
                        'color': 'black',
                        'padding': '2rem',
                        'border-radius': '10px',
                        'border': '1px solid #f5f5f5',
                        'border-radius': '10px',
                        'border-top-left-radius': '10px',
                        'border-top-right-radius': '10px',


                    }
                }
                    className="home-title">
                    
                    <Box >
                        
                       
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                marginTop: "2rem",
                                backgroundColor: "#4E342E",
                                color:"white",
                                borderRadius: "10px",
                                height: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: "0px 4px 10px 2px rgba(0,0,0,0.1)"
                                }
                            }}
                        >
                            <Grid item xs={12} md={6}>

                           
                        <div>
                        <h1 >
                            FrontEnd Developer Skills
                        </h1>
                            <h2>Lenguajes de programación</h2>
                            <ul >
                                <li>
                                    <img src={HTML} height="50px" width="50px" alt="logo" />
                                    HTML
                                </li>
                                <li>
                                    <img src={CSS} height="50px" width="50px" alt="logo" />
                                    CSS
                                </li>
                                <li>
                                    <img src={JS} height="50px" width="50px" alt="logo" />
                                    Javascript
                                </li>
                                <li>
                                    <img src={TS} height="50px" width="50px" alt="logo" />
                                    Typescript *
                                </li>
                                <li>

                                    <img src={Python} height="50px" width="50px" alt="logo" />
                                    Phyton *
                                </li>
                            </ul>
                            <h2>Frameworks</h2>
                            <ul >
                                <li>
                                    <img src={Bootstrap} height="50px" width="50px" alt="logo" />
                                    Bootstrap
                                </li>
                                <li>
                                    <img src={Mui} height="50px" width="50px" alt="logo" />
                                    Material UI
                                </li>
                                <li>
                                    <img src={Tailwind} height="50px" width="50px" alt="logo" />
                                    Tailwind
                                </li>
                                <li>
                                    <img src={React} height="60px" width="70px" alt="logo" />
                                    React js
                                </li>
                                <li>
                                    <img src={Next} height="60px" width="70px" alt="logo" />

                                    Next *
                                </li>
                            </ul>
                            <h2>Software y Herramientas</h2>
                            <ul >
                                <li>
                                    <img src={Figma} height="50px" width="50px" alt="logo" />
                                    Figma
                                </li>
                                <li>
                                    <img src={Adobe} height="50px" width="50px" alt="logo" />
                                    Adobe
                                </li>
                                <li>
                                    <img src={Vscode} height="50px" width="50px" alt="logo" />
                                    VSC
                                </li>
                                <li>
                                    <img src={Git} height="50px" width="50px" alt="logo" />
                                    GIT
                                </li>
                                <li>
                                    <img src={Jira} height="50px" width="50px" alt="logo" />
                                    Jira
                                </li>
                            </ul>
                        </div>
                        </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                marginTop: "2rem",
                                backgroundColor: "#143355",
                                color:"white",
                                borderRadius: "10px",
                                height: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    boxShadow: "0px 4px 10px 2px rgba(0,0,0,0.1)"
                                }
                            }}
                        >
                            <Grid item xs={12} md={6}>
                                <Box px={2}>
                                    <h2>Estudios actuales</h2>
                                    <ol id="currentStudy">
                                        <li>Fase de proyecto final en Bootcamp FrontEnd Developer Desafío Latam</li>
                                        <li>CS50: Introduction to Computer Science - Harvard (semana 4)</li>
                                        <li>Redux en React - Next (Udemy)</li>
                                        <li>JQuery - Node js (Udemy)</li>
                                        <li>Phyton (CS50 - Edutin Academy)</li>
                                    </ol>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box display="flex" justifyContent="center">
                                    <img src={Study} alt="" 
                                    style={{
                                        padding:"2rem",
                                        maxWidth: "100%" 
                                        }} />
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>

                </div>
                <div className="home-subtitle">

                </div>
            </div>
            <main>
                <Grid>

                </Grid>
                <div className="home-content">
                    <Typography
                        id="edu-class1"
                        sx={{
                            mt: "3rem"
                        }}
                        variant="h4">
                        Encuéntrame en mis Redes
                    </Typography>
                    <div>
                        <Box className="rrss">
                            <div
                                onClick={() => window.open('https://www.linkedin.com/in/miguelcartagenaa/')}
                                className="linkedinImg rrssItem"></div>
                            <div
                                onClick={() => window.open('https://github.com/mstrangeletter')}
                                className="gitImg rrssItem"></div>
                            <Link to="./Contact">
                                <div
                                    className="emailImg rrssItem">
                                </div>
                            </Link>
                        </Box>
                    </div>
                    <div className="home-content-wrapper">
                        <div className="home-content-item">
                            <Button
                                onClick={() => window.open('https://drive.google.com/file/d/1t-H6Ot_8IqLhmBlkzE3B7HqEgV3H9RLu/view?usp=share_link', '_blank')}
                                variant="contained"
                                sx={{
                                    mt: "5rem",
                                    m: "5rem",
                                    mb: "10rem"
                                }} >Descarga mi CV</Button>
                            <Link to="/Proyects">
                                <Button
                                    variant="contained" color="warning" sx={{
                                        mt: "5rem",
                                        m: "5rem",
                                        mb: "10rem",
                                    }}>Mis proyectos</Button>
                            </Link>
                        </div>

                    </div>
                </div>
                <section
                    id="sectionStudies">
                    <Typography
                        id="edu-class1"
                        sx={{
                            margin: "2rem",


                        }}
                        variant="h4">
                        Educación
                    </Typography>
                    <Box className="education">
                        <Typography id="edu-class1" variant="h5">
                            Desafio Latam <span id="entreParentesis">(En Proceso de Proyecto Final)</span>
                        </Typography>
                        <Typography>
                            <ol>
                                <li>Fundamentos de HTML, CSS, JavaScript y React.</li>
                                <li>Diseño web responsive y adaptativo - Bootstrap - Material UI - Tailwind</li>
                                <li>Desarrollo de aplicaciones móviles y web progresivas.</li>
                                <li>Integración de API y servicios web</li>
                            </ol>
                        </Typography>
                    </Box>
                    <Box className="education">
                        <Typography
                            id="edu-class1"
                            variant="h5">
                            CS50: Introduction to Computer Science - Harvard (Data Structure)
                        </Typography>
                        <Typography>
                            <ol>
                                <li>Programación en C - Scratch</li>
                                <li>Arrays - Algorithms - Memory</li>
                                <li>Data Structure - Python - SQL</li>
                                <li>HTML - CSS - Javascript </li>
                                <li>Flask - Emoji</li>
                                <li>Cybersecurity</li>
                            </ol>
                        </Typography>
                    </Box>
                    <Box className="education">
                        <Typography
                            id="edu-class1"
                            variant="h5">
                            Analista Programador (Duoc Uc -  no titulado )
                        </Typography>
                        <Typography>
                            <ol>
                                <li>Programación en PHP </li>
                                <li>Arrays - Algorithms - Functions</li>
                                <li>Data Structure - SQL</li>
                                <li>HTML - JQuery </li>
                                <li>Hardware </li>
                                <li>Cybersecurity</li>
                            </ol>
                        </Typography>
                    </Box>
                    <Box className="education">
                        <Typography
                            id="edu-class1"
                            variant="h5"
                        >
                            Periodista
                        </Typography>
                        <Typography>
                            <ol>
                                <li>Asesor de Comunicaciones - Community Manager <span id="edu-class1">Cámara de Diputados</span></li>
                                <li>Generador de Contenido -  E-Commerce <span id="edu-class1">Farmacias Dr Simi</span></li>
                                <li>Periodista - Notero <span id="edu-class1">Canal 2 - San Antonio</span></li>
                                <li style={{
                                    marginBottom: "5rem"
                                }}
                                >Notero <span id="edu-class1">Miniplug - Programa de Música Cristiana</span></li>
                            </ol>
                        </Typography>
                    </Box>
                </section>
            </main>
        </div>
    )

}