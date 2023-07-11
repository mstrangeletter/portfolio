import { Grid, Card, CardContent, Typography } from "@mui/material";
import harmoniProp from "../img/harmoniProp.png";
import mammaMia from "../img/mammaMia.png";
import naturalPic from "../img/naturalPic.png";
import Pokedex from "../img/pokedex.png";
import "../pages/proyects.css";
const cardData = [
  { id: 1, title: "Natural Pic", content: "HTML - CSS - Javascript - Material UI - React", img: naturalPic, dir: "https://admirable-stroopwafel-d63cdd.netlify.app/" },
  { id: 2, title: "Mamma Mia", content: "HTML - CSS - Javascript - Material UI - React", img: mammaMia, dir: "https://resilient-crumble-958a66.netlify.app/" },
  { id: 3, title: "HarmoniProp", content: "HTML - CSS - Javascript - Material UI - React", img: harmoniProp, dir: "https://harmoniprop-proyect.netlify.app/" },
  { id: 3, title: "Pokedex", content: "HTML - CSS - Javascript - Tailwind - React", img: Pokedex, dir: "https://symphonious-lily-e7f8fa.netlify.app/" },
];

const Proyects = () => {
  const displayedCards = cardData.slice(0, 8);

  return (
    <main className="main">

    <div style={{

      height: "200vh",
      margin: "3rem",
      "@media (max-width: 768px)": {
        height: "200vh",
        margin: "1rem",
      },
      "@media (max-width: 480px)": {
        height: "300vh",
        margin: "1rem",
      }
    }}>
    
      <div>
        <Typography sx={{
          mt: "2rem",
          mb: "3rem",
          mr: "10rem",
          fontWeight: "700"
        }}
          variant="h3">
          Proyectos
        </Typography>
      </div>

      <Grid container spacing={2}>
        {displayedCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
            <Card
              sx={{
                marginTop:"5rem",
                height: "100%",
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0.7,
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 0.9,
                }
              }}>
              <CardContent
                sx={{
                  height: "13rem",
                  backgroundColor: "rgba(128, 128, 128, 0.8)",
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition:"center",
                  marginTop:"2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    opacity: 1,
                  }
                }}>
                <Typography gutterBottom variant="h5" sx={{
                  color: "white",
                }} component="header">

                </Typography>
                <Typography variant="subtitle1" color="inherit" sx={{
                  color: "white",
                  backgroundColor: "black"
                }}>
                  {card.content}
                </Typography>
              </CardContent>

              <Typography
                onClick={() => {
                  window.open(card.dir, '_blank');
                }}
                variant="button"
                sx={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "1rem",
                  cursor: "pointer",
                  paddingBottom: "1rem",
                  paddingTop: "1rem",
                  backgroundColor: "#1B9C85"
                }}
              >
                {`Ir a ${card.title}`}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </main>
  );
};

export default Proyects;
