import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ExchangeRates } from './components/exchange/ExchangeRates'
import { ClientStoriesPage } from './pages/ClientStoriesPage'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background"> 
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchange" element={<ExchangeRates />} />
            <Route path="/clients" element={<ClientStoriesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App