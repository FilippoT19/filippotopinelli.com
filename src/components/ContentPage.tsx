import React, { ReactNode } from "react";
import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";
import HorizontallMenu from "./HorizontalMenu";

interface Props {
  children?: ReactNode;
}

const ContentPage = ({ children }: Props) => (
  <Box as="main" py={6}>
    <Container maxW="container.md">
      <VStack spacing={6} align="stretch">
        <div>
          <HorizontallMenu />
        </div>

        {children}
        
      </VStack>
    </Container>
  </Box>
);

export default ContentPage;
