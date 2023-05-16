import { createContext } from 'react';

export const AutotypeContext = createContext({ autotype: () => {} });

export const AutotypeProvider = ({ children }) => {
  const autotype = (text) => {
    let i = 0;
    const interval = setInterval(() => {
      const typingText = document.querySelector("#typing-text");
      typingText.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 200);
  }

  return (
    <AutotypeContext.Provider value={{ autotype }}>
      {children}
    </AutotypeContext.Provider>
  );
};
