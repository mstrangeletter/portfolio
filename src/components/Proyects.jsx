import { Grid, Card, CardContent, Typography } from "@mui/material";

const cardData = [
  { id: 1, title: "Card 1", content: "Content of Card 1" },
  { id: 2, title: "Card 2", content: "Content of Card 2" },
  { id: 3, title: "Card 3", content: "Content of Card 3" },
  { id: 4, title: "Card 4", content: "Content of Card 4" },
  { id: 5, title: "Card 5", content: "Content of Card 5" },
  { id: 6, title: "Card 6", content: "Content of Card 6" },
  { id: 7, title: "Card 7", content: "Content of Card 7" },
  { id: 8, title: "Card 8", content: "Content of Card 8" },
  { id: 9, title: "Card 9", content: "Content of Card 9" },
  { id: 10, title: "Card 10", content: "Content of Card 10" },
  { id: 11, title: "Card 11", content: "Content of Card 11" },
  { id: 12, title: "Card 12", content: "Content of Card 12" },
];

const Proyects = () => {
  const displayedCards = cardData.slice(0, 8);

  return (
    <div style={{
        height:"150vh",
        margin:"3rem"
    }}>
        <div>
            <Typography sx={{
                mt:"3rem",
                mb:"3rem",
                fontWeight:"700"
            }}
            variant="h3">
                Proyectos
            </Typography>
        </div>

    <Grid 
    container spacing={2}>
      {displayedCards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
          <Card 
          sx={{ 
            height: "100%",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 10px 2px rgba(0,0,0,0.1)"
            }
          }}>
            <CardContent 
            sx={{ 
              height: "15rem", 
              backgroundColor:"grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
            <Typography variant="srOnly">{`Tarjeta ${card.title}`}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default Proyects;
