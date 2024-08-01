import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: '"Space Mono", monospace',
    fontSize: 16,
    h1: {
      '@media (min-width:200px)': {
        fontSize: 11,
      },
      '@media (min-width:400px)': {
        fontSize: 12,
      },
      '@media (min-width:600px)': {
        fontSize: 14,
      },
      '@media (min-width:900px)': {
        fontSize: 16,
      },
      '@media (min-width:1200px)': {
        fontSize: 19,
      },
    },
  },
  components: {},
})
