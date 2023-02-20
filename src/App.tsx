import { useRef, useState } from 'react'
import GlobalStyle from './styles/global'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <main>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
      <GlobalStyle></GlobalStyle>  
    </main>
  )
}

export default App
