import { Flex, Stack } from '@chakra-ui/react'
import CardHeader from '../components/CardHeader'
import Title from '../components/Title'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 1,
    data: [
      {
        x: '17/01/2021',
        y: 47
      },
      {
        x: '18/01/2021',
        y: 75
      },
      {
        x: '19/01/2021',
        y: 64
      }
    ]
  },
  {
    id: 2,
    data: [
      {
        x: '17/01/2021',
        y: 47
      },
      {
        x: '18/01/2021',
        y: 4
      },
      {
        x: '19/01/2021',
        y: 64
      }
    ]
  }
]

export default function Home() {
  return (
    <>
      <Title name="Resumo" />
      <Stack spacing="16px" isInline w="100%">
        <Flex direction="column" p="16px 0" w="70%">
          <Flex w="100%" justify="space-between">
            <CardHeader />
            <CardHeader />
            <CardHeader />
            <CardHeader />
          </Flex>
          <Flex mt="16px" bg="white" w="100%" h="400px">
            <ResponsiveLine
              data={data}
              curve="natural"
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
              }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Periodo',
                legendOffset: 36,
                legendPosition: 'middle'
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Vendas',
                legendOffset: -40,
                legendPosition: 'middle'
              }}
              pointSize={10}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                      }
                    }
                  ]
                }
              ]}
            />
          </Flex>
        </Flex>
        <Flex p="16px" w="30%"></Flex>
      </Stack>
    </>
  )
}
