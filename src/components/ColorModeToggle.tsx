import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const IconComponent = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={<IconComponent />}
      onClick={toggleColorMode}
      size="md"
      variant="ghost"
      color="current"
      marginLeft="2"
      _hover={{
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    />
  );
};

export default ColorModeToggle;