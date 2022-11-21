import { useContext } from 'react'
import { SearchContext } from '@/contexts/SearchContext'

const useSearchContext = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error('No SearchContext.Provider found')
  }

  return context
}

export default useSearchContext
