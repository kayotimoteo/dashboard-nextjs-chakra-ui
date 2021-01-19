import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { IconBaseProps } from 'react-icons'

interface SideBarItemProps {
  title: string
  icon?: IconBaseProps
  isFirst?: boolean
}

const SideBarItem: React.FC<SideBarItemProps> = ({ title, icon, isFirst }) => {
  return (
    <Flex
      mt={!isFirst && '8px'}
      color="white"
      _hover={{ color: 'gray.400' }}
      transition="color 0.2s"
      cursor="pointer"
    >
      {icon && icon}
      <Text ml="4px">{title}</Text>
    </Flex>
  )
}

export default SideBarItem
