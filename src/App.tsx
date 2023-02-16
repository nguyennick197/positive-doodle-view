import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Doodles } from './components/Doodles'
import './App.css'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Doodles />
    </QueryClientProvider>
  )
}

export default App
