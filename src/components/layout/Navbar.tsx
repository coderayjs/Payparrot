import { Link } from 'react-router-dom'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  return (
    <nav className="bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-kp-yellow">Pay</span>
            <span className="text-text-primary">Parrot.ng</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/exchange" className="text-text-primary hover:text-kp-yellow transition-colors">
              Exchange Rates 💱
            </Link>
            <Link to="/marketplace" className="text-text-primary hover:text-kp-yellow transition-colors">
              Freelance Jobs
            </Link>
            <Link to="/clients" className="text-text-primary hover:text-kp-yellow transition-colors">
              Client Stories
            </Link>
            <Link to="/blog" className="text-text-primary hover:text-kp-yellow transition-colors">
              Blog
            </Link>
            <Link 
              to="/start" 
              className="bg-kp-yellow text-black px-4 py-2 rounded-md hover:bg-kp-green hover:text-white transition-colors font-semibold"
            >
              Trade Now
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}