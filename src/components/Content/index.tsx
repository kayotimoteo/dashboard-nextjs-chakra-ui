import { Flex } from '@chakra-ui/react'
import React from 'react'

const Content: React.FC = ({ children }) => {
  return (
    <Flex direction="column" as="aside" w="100%" p="24px">
      {children}
    </Flex>
  )
}

export default Content
