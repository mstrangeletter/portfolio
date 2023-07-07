import { Grid, TextField, Button, Typography, Snackbar } from "@mui/material";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "./firebase/Firebase";
import { useState } from "react";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !correo || !mensaje) {
      setError(true);
      setErrorMessage("Por favor, complete todos los campos.");
      return;
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(correo)) {
      setError(true);
      setErrorMessage("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "contactos"), { nombre, correo, mensaje });
      console.log("Formulario enviado correctamente", docRef.id);
      alert("Formulario enviado correctamente", docRef.id);

      // Aquí puedes mostrar un mensaje de éxito o redirigir al usuario a otra página
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setError(true);
      setErrorMessage("Ocurrió un error al enviar el formulario.");
    }

    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  const handleCloseAlert = () => {
    setError(false);
    setErrorMessage("");
  };

  return (
    <div>
      <div>
        <Typography sx={{ mt: "3rem", fontWeight: "700" }} variant="h3">
          Contacto
        </Typography>
      </div>
      <Grid
        sx={{ mt: "3rem", mb: "10rem" }}
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              margin="normal"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Correo electrónico"
              type="email"
              variant="outlined"
              margin="normal"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
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
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <Button type="submit" variant="contained" color="warning" fullWidth>
              Enviar
            </Button>
            <Snackbar
              open={error}
              autoHideDuration={5000}
              onClose={handleCloseAlert}
              message={errorMessage}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
