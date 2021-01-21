import { Avatar, Box, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import CardHeader from '../components/CardHeader'
import Title from '../components/Title'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 1,
    data: [
      {
        x: '17/01',
        y: 0
      },
      {
        x: '18/01',
        y: 35
      },
      {
        x: '19/01',
        y: 65
      },
      {
        x: '20/01',
        y: 65
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        x: '17/01',
        y: 5
      },
      {
        x: '18/01',
        y: 45
      },
      {
        x: '19/01',
        y: 0
      },
      {
        x: '20/01',
        y: 30
      }
    ]
  }
]

export default function Home() {
  return (
    <>
      <Title name="Resumo" />
      <Stack mt="16px" spacing="16px" isInline w="100%">
        <Flex direction="column" w="70%">
          <Flex w="100%" justify="space-between">
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
          </Flex>
          <Flex
            direction="column"
            p="8px"
            mt="16px"
            bg="white"
            w="100%"
            h="400px"
            rounded="sm"
          >
            <Flex justifyContent="space-between">
              <Text color="gray.600" fontWeight="bold">
                Relatório de vendas
              </Text>
              <Stack fontSize={14} spacing="8px" isInline>
                <Flex>
                  <Box mr="4px" bg="#27C990" w="24px" h="24px" />
                  <Text>Entrada</Text>
                </Flex>
                <Flex>
                  <Box mr="4px" bg="#F42E40" w="24px" h="24px" />
                  <Text>Saída</Text>
                </Flex>
              </Stack>
            </Flex>
            <Flex w="100%" h="100%">
              <ResponsiveLine
                data={data}
                curve="cardinal"
                colors={['#27C990', '#F42E40']}
                margin={{ top: 40, right: 20, bottom: 40, left: 40 }}
                pointSize={10}
                enableArea
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                useMesh={true}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          rounded="sm"
          direction="column"
          mt="16px"
          bg="white"
          p="16px"
          w="30%"
        >
          <Text color="gray.600" fontWeight="bold">
            Produtos Top de Vendas
          </Text>
          <Divider mt="16px" />
          <Stack mt="16px">
            <Flex
              p="8px"
              rounded="md"
              shadow="md"
              justify="space-between"
              align="center"
              _hover={{ bg: 'gray.100' }}
              transition="background 0.2s"
            >
              <Avatar mr="8px" />
              <Text w="100%">Par de Meias 43-44</Text>
              <Text>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(10)}
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}
