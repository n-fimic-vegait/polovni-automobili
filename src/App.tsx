import { Header } from './components/molecules/Header'
import { Footer } from './components/molecules/Footer'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <>
      <Header />
      <div>
        <HomePage />
        <Footer />
      </div>
    </>
  )
}

export default App
