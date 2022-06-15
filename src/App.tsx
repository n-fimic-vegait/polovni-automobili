import { Header } from './components/molecules/Header'
import { Footer } from './components/molecules/Footer'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='*' element={<h1> 404 NOT FOUND </h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
