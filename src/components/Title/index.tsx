import { Text } from '@chakra-ui/react'
import React from 'react'

interface TitleProps {
  name: string
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <Text fontSize={28} fontWeight="bold">
      {name}
    </Text>
  )
}

export default Title
