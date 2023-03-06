import React, { createContext, useState } from 'react'

interface ContextProps {
  isDarkTheme: boolean
  toggleTheme: () => void
}

export const Context = createContext<ContextProps>({
  isDarkTheme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {}
})

interface ProviderProps {
  children: React.ReactNode
}

export const ContextProvider: React.FunctionComponent<ProviderProps> = ({
  children
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <Context.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </Context.Provider>
  )
}
