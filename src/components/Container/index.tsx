import { Flex } from '@chakra-ui/react';
import React from 'react';
import SideBar from '../SideBar';
import SideBarItem from '../SideBar/SideBarItem';
import TopBar from '../TopBar';

const Container: React.FC = () => {
  return (
    <Flex>
      <SideBar/>
      <TopBar/>
    </Flex>
  );
}

export default Container;
