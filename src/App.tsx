import React from "react";
import { Box, ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react";
import theme from "./Theme";
import HorizontalMenu from "./components/HorizontalMenu";
import ContentPage from "./components/ContentPage";
import ColorModeToggle from "./components/ColorModeToggle";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HorizontalMenu />
      <Flex>
        <Flex flex={1} justifyContent="center">
          <ContentPage></ContentPage>
        </Flex>

        <Box position="absolute" top="1rem" right="1rem">
        <ColorModeToggle />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
