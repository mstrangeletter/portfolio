import { Box } from "@mui/system"
import Main from "../Main";
import "../pages/home.css";
import HTML from "/img/HTML.png";
import CSS from "/img/CSS.png";
import JS from "/img/JS.png";
import TS from "/img/TS.png";
import Python from "/img/Python.png";
import Bootstrap from "/img/bootstrap.png";
import Mui from "/img/materialui.png";
import Tailwind from "/img/tailwind.png";
import React from "/img/React.png";
import Next from "/img/nextjs.png";
import Figma from "/img/figma.png";
import Adobe from "/img/adobe.png";
import Git from "/img/git.png";
import Vscode from "/img/vscode.png";
import Jira from "/img/jira.png";
import Study from "/img/study.jpeg";
import { Grid, Typography } from "@mui/material";

export default function Home() {

    return (
        <div className="home">
            <Main />
            <div className="home-wrapper">
                <div className="home-logo">

                </div>
                <Box>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            marginTop: "2rem",
                            backgroundColor: "#4E342E",
                            color: "white",
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
                            color: "white",
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
                                    <li>CS50: Introduction to Computer Science - Harvard</li>
                                    <li>Redux en React - Next (Udemy)</li>
                                    <li>JQuery - Node js (Udemy)</li>
                                    <li>Phyton (Edutin Academy)</li>
                                </ol>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box display="flex" justifyContent="center">
                                <img src={Study} alt=""
                                    style={{
                                        padding: "2rem",
                                        maxWidth: "100%"
                                    }} />
                            </Box>
                        </Grid>
                    </Grid>


                </Box>


                <div className="home-subtitle">

                </div>
            </div>
            <main>
                <Grid>

                </Grid>
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
                        <div>
                            <ol>
                                <li>Fundamentos de HTML, CSS, JavaScript y React.</li>
                                <li>Diseño web responsive y adaptativo - Bootstrap - Material UI - Tailwind</li>
                                <li>Desarrollo de aplicaciones móviles y web progresivas.</li>
                                <li>Integración de API y servicios web</li>
                            </ol>
                        </div>
                    </Box>
                    <Box className="education">
                        <Typography
                            id="edu-class1"
                            variant="h5">
                            CS50: Introduction to Computer Science - Harvard (Data Structure)
                        </Typography>
                        <div>
                            <ol>
                                <li>Programación en C - Scratch</li>
                                <li>Arrays - Algorithms - Memory</li>
                                <li>Data Structure - Python - SQL</li>
                                <li>HTML - CSS - Javascript </li>
                                <li>Flask - Emoji</li>
                                <li>Cybersecurity</li>
                            </ol>
                        </div>
                    </Box>
                    <Box className="education">
                        <Typography
                            id="edu-class1"
                            variant="h5">
                            Analista Programador (Duoc Uc -  no titulado )
                        </Typography>
                        <div>
                            <ol>
                                <li>Programación en PHP </li>
                                <li>Arrays - Algorithms - Functions</li>
                                <li>Data Structure - SQL</li>
                                <li>HTML - JQuery </li>
                                <li>Hardware </li>
                                <li>Cybersecurity</li>
                            </ol>
                        </div>
                    </Box>
                    <Box className="education">
                        <Typography
                            id="edu-class1"
                            variant="h5"
                        >
                            Periodista
                        </Typography>
                        <div>
                            <ol>
                                <li>Asesor de Comunicaciones - Community Manager <span id="edu-class1">Cámara de Diputados</span></li>
                                <li>Generador de Contenido -  E-Commerce <span id="edu-class1">Farmacias Dr Simi</span></li>
                                <li>Periodista - Notero <span id="edu-class1">Canal 2 - San Antonio</span></li>
                                <li style={{
                                    marginBottom: "5rem"
                                }}
                                >Notero <span id="edu-class1">Miniplug - Programa de Música Cristiana</span></li>
                            </ol>
                        </div>
                    </Box>
                </section>
            </main>
        </div>
    )

}