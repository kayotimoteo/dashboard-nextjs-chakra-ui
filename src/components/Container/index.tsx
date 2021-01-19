import { Flex } from '@chakra-ui/react'
import React from 'react'
import Content from '../Content'
import SideBar from '../SideBar'
import SideBarItem from '../SideBar/SideBarItem'
import TopBar from '../TopBar'

const Container: React.FC = ({ children }) => {
  return (
    <Flex>
      <SideBar />
      <Flex direction="column" w="200%">
        <TopBar />
        <Content>{children}</Content>
      </Flex>
    </Flex>
  )
}

export default Container
