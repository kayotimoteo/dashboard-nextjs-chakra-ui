import React from 'react'
import {
  Avatar,
  Box,
  Flex,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text
} from '@chakra-ui/react'
import { FiBell, FiMenu, FiSettings } from 'react-icons/fi'
import TopBarItem from './TopBarItem'

const TopBar: React.FC = () => {
  return (
    <Flex
      color="#7D9EB5"
      align="center"
      justify="space-between"
      bg="white"
      p="24px"
      h="64px"
      w="100%"
    >
      <TopBarItem icon={<FiMenu size={20} />} />
      <Stack spacing="16px" isInline align="center">
        <TopBarItem icon={<FiSettings size={20} />} />
        <TopBarItem icon={<FiBell size={20} />} />
        <Popover placement="top-end">
          <PopoverTrigger>
            <Stack
              color="#3F4E5D"
              opacity="1"
              _hover={{ opacity: '0.6' }}
              transition="opacity 0.2s"
              cursor="pointer"
              spacing="8px"
              isInline
              align="center"
            >
              <Avatar />
              <Text>Kayo Timóteo</Text>
            </Stack>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Flex direction="column">
                <Link>Minha conta</Link>
                <Link>Sair</Link>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
    </Flex>
  )
}

export default TopBar
