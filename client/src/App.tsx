import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Tetris } from './Tetris'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      retry: false,
    },
  },
})

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <CssBaseline />
    <Tetris />
  </QueryClientProvider>
)
