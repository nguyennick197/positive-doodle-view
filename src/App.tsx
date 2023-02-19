import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Home } from './components/Home'
import './App.css'
import { FilterContextProvider } from './contexts/FilterContext'
import { FavoritesContextProvider } from './contexts/FavoritesContext'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <FavoritesContextProvider>
          <Home />
        </FavoritesContextProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default App
