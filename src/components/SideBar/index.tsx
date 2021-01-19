import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FiDollarSign, FiFileText, FiHome, FiPackage, FiUsers } from 'react-icons/fi'
import SideBarItem from './SideBarItem';

const SideBar: React.FC = () => {
  return (
    <Flex direction="column" p="24px" bg="blue.500" height="100vh" w="320px">
      <Text color="white">Logo</Text>
      <SideBarItem title="Dashboard" icon={<FiHome size={20}/>}/>
      <Flex fontSize={14} p="16px 0" color="#6D7C99">
        <Text>GERENCIAR</Text>
      </Flex>
      <SideBarItem title="Clientes" icon={<FiUsers size={20}/>} isFirst/>
      <SideBarItem title="Produtos" icon={<FiPackage size={20}/>}/>
      <SideBarItem title="Pedidos" icon={<FiFileText size={20}/>}/>
      <SideBarItem title="Cobrança" icon={<FiDollarSign size={20}/>}/>
    </Flex>
  );
}

export default SideBar;
