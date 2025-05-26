import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className='h-screen font-bricolage bg-background text-foreground'>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/product/:id' element={ <ProductPage />} />
        </Routes>
        <Toaster />
    </div>
    </ThemeProvider>
  )
}

export default App
