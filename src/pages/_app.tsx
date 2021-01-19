import { ChakraProvider } from "@chakra-ui/react"
import Container from "../components/Container"
import customTheme from "../styles/customTheme"

function App({ Component, pageProps }) {
  return( 
    <ChakraProvider theme={customTheme}>
      <Container/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
