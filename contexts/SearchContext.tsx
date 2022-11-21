import { useState, createContext, ReactNode, FC } from 'react'

type Context = {
  searchTerm: string
  updateSearch: (val: string) => void
}

type Props = {
  children: ReactNode
}

export const SearchContext = createContext<Context | undefined>(undefined)

export const SearchProvider: FC<Props> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const updateSearch = (val: string) => {
    setSearchTerm(val)
  }

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
