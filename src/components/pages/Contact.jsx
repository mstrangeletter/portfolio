import { Grid, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar el formulario
  };

  return (
    <div>
        <div>
            <Typography sx={{
                mt:"3rem",
                fontWeight:"700"
            }} variant="h3">Contacto</Typography>
        </div>
    <Grid 
    sx={{
        mt:"3rem",
        mb:"10rem",
    }}
    container spacing={2} alignItems="center" justifyContent="center">
        <Typography>
        
        </Typography>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Correo electrónico"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" fullWidth>
            Enviar
          </Button>
        </form>
      </Grid>
    </Grid>
    </div>
  );
};

export default Contact;
