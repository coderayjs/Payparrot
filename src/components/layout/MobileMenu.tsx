import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-primary hover:text-kp-yellow transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="fixed inset-x-4 top-8 z-50 rounded-lg bg-card-background border border-kp-yellow/20 p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
                <span className="text-kp-yellow">Pay</span>
                <span className="text-text-primary">Parrot.ng</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-text-primary hover:text-kp-yellow transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-6">
              <Link
                to="/exchange"
                className="block text-lg text-text-primary hover:text-kp-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Exchange Rates 💱
              </Link>
              <Link
                to="/marketplace"
                className="block text-lg text-text-primary hover:text-kp-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Freelance Jobs
              </Link>
              <Link
                to="/clients"
                className="block text-lg text-text-primary hover:text-kp-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Client Stories
              </Link>
              <Link
                to="/blog"
                className="block text-lg text-text-primary hover:text-kp-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/start"
                className="block w-full bg-kp-yellow text-black text-center px-4 py-3 rounded-md hover:bg-kp-green hover:text-white transition-colors font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Trade Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
} 