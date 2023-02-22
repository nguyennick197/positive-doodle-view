import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Home } from './components/pages/Home'
import './App.css'
import { FilterContextProvider } from './contexts/FilterContext'
import { FavoritesContextProvider } from './contexts/FavoritesContext'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesContextProvider>
        <FilterContextProvider>
          <Home />
        </FilterContextProvider>
      </FavoritesContextProvider>
    </QueryClientProvider>
  )
}

export default App
