import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Title from '../components/Title'

const Products: React.FC = () => {
  return (
    <>
      <Flex>
        <Box w="100%">
          <Title name="Produtos" />
        </Box>
        <Stack isInline>
          <InputGroup w="400px">
            <Input bg="white" placeholder="Busque por Produtos" />
            <InputRightElement
              children={<FiSearch size={20} />}
            ></InputRightElement>
          </InputGroup>
          <Button colorScheme="blue">Novo Produto</Button>
        </Stack>
      </Flex>
      <Flex direction="column" bg="white" p="16px">
        <Flex p="16px 0" align="center" justify="space-between">
          <Text fontWeight="bold">Lista de produtos</Text>
          <Button>Exportar</Button>
        </Flex>
        <Divider />
        {/* <Flex>
          <Text
        </Flex> */}
      </Flex>
    </>
  )
}

export default Products
