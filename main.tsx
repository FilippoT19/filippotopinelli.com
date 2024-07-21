import React from "react";
import ReactDOM from "react-dom/client";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./Theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import ColorModeToggle from "./components/ColorModeToggle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <RouterProvider router={router}/>
      <Box position="absolute" top="1rem" right="1rem">
        <ColorModeToggle />
        </Box>
    </ChakraProvider>
  </React.StrictMode>
);
