import React from 'react'
import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
    <Heading as="h1" size="2xl" textAlign="center">
          Welcome to My Website
        </Heading>

        <Text>
          This is an introduction paragraph. It provides a brief overview of
          what the page or website is about. You can replace this text with your
          own content to give visitors a clear idea of what to expect.
        </Text>

        <Heading as="h2" size="lg" mt={4}>
          First Small Title
        </Heading>

        <Text>
          This is the content under the first small title. You can elaborate on
          specific topics or features here. The narrow layout helps to improve
          readability and focus the reader's attention on the content.
        </Text>

        <Heading as="h2" size="lg" mt={4}>
          Second Small Title
        </Heading>

        <Text>
          Here's another section with its own small title. This structure allows
          you to organize your content into distinct sections, making it easier
          for readers to navigate and understand the information you're
          presenting.
        </Text>

        <Heading as="h2" size="lg" mt={4}>
          Conclusion
        </Heading>

        <Text>
          This is a concluding paragraph. You can summarize key points or
          provide a call to action here. Remember, the goal is to create content
          that is both informative and easy to read.
        </Text>
        </>
  )
}

export default Home