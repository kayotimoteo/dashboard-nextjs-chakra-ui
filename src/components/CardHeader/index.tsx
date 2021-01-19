import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const CardHeader: React.FC = () => {
  return (
    <Flex bg="white" rounded="sm" direction="column" p="8px">
      <Text fontWeight="medium" color="gray.400">
        Total de vendas
      </Text>
      <Flex mt="16px" bg="red" align="center">
        <Text fontSize={24} fontWeight="medium" color="gray.600">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(100000.0)}
        </Text>
        <Text ml="4px" color="green.400">
          + 3.55%
        </Text>
      </Flex>
    </Flex>
  )
}

export default CardHeader
