import { Box } from '@chakra-ui/react';
import React from 'react';
import { IconBaseProps } from 'react-icons';

interface TopBarItem {
  icon?: IconBaseProps
}

const TopBarItem: React.FC<TopBarItem> = ({icon}) => {
  return (
    <Box
      _hover={{color:"gray.600"}}
      transition="color 0.2s"
      cursor="pointer"
    >
      {icon && icon}
    </Box>
  );
}

export default TopBarItem;
