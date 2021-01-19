import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  colors : {
    blue : {
      500 : "#0C2556"
    }
  },
  styles: {
    global: {
      body: {
        bg: "#F2F2F2"
      }
    }
  }
})

export default customTheme