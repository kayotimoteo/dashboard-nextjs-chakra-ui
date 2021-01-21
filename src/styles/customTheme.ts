import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Inter, monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  colors: {
    blue: {
      500: '#0C2556'
    },
    gray: {
      400: '#B5C8D6',
      600: '#223345'
    },
    green: {
      400: '#27C990'
    }
  },
  styles: {
    global: {
      body: {
        bg: '#F2F2F2'
      }
    }
  }
})

export default customTheme
