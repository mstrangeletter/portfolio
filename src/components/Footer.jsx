import { useContext, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "../components/footer.css";
import { AutotypeContext } from './Autotype';

function Footer() {
  const [isTyping, setIsTyping] = useState(true);
  const { autotype } = useContext(AutotypeContext);

  useEffect(() => {
    if (isTyping) {
      const text = "HTML - CSS - JS - React - React Router - Material UI";
      let i = 0;
      const interval = setInterval(() => {
        const typingText = document.querySelector("#typing-text");
        typingText.textContent = text.slice(0, i % text.length + 1);
        i++;
        if (i >= text.length * 1000) clearInterval(interval);
      }, 200);
      setIsTyping(false);
    }
  }, [isTyping, autotype]);

  return (
    <div className="container-text">
      <footer>
        <Container  maxWidth="sm">
          <Typography  variant="h4">WEBELOPER</Typography>
          <Typography  variant="body2">Este sitio está desarrollado con:</Typography>
          <Typography  variant="body1">
            <span id="typing-text"></span>
          </Typography>
          <Typography className="container-subtext"variant="caption" color="info">
           Miguel Cartagena © {new Date().getFullYear()} All Rights Reserved
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
