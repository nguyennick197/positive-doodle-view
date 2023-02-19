import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Home } from './components/pages/Home'
import './App.css'
import { FilterContextProvider } from './contexts/FilterContext'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <Home />
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default App
