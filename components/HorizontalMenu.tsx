// HorizontalMenu.js
import React from 'react';
import { HStack, Box, Link, Flex, IconButton, useColorMode, useColorModeValue, Divider } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';


const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const IconComponent = colorMode === 'light' ? MoonIcon : SunIcon;

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={<IconComponent />}
      onClick={toggleColorMode}
      isRound={true}
      size="md"
      variant="outline"
      color={colorMode === 'light' ? 'gray.800' : 'gray.100'}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.800'}
      _hover={{
        bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
      }}
    />
  );
};

const HorizontalMenu = () => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
    { label: 'Studying', href: '/studying' },
    { label: 'Consuming', href: '/consuming' },
    { label: 'Shower', href: '/shower' },
    { label: 'About', href: '/about' },
  ];

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const linkColor = useColorModeValue('gray.800', 'gray.100');
  const linkHoverColor = useColorModeValue('accent.600', 'accent.300');

  return (
    <Box width="100%" bg={bgColor} py={0}>
      <Flex justify="space-evenly" align="center" maxWidth="container.xl" mx="auto" px={4}>
        <HStack spacing={8}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              color={linkColor}
              fontWeight="medium"
              _hover={{
                color: linkHoverColor,
                textDecoration: 'underline',
              }}
            >
              {item.label}
            </Link>
          ))}
          
        </HStack>
        
      </Flex>
      <Divider marginTop={6} />
    </Box>
  );
};

export default HorizontalMenu;