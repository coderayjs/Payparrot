import { PriceCards } from '../components/exchange/PriceCards'
import { Alert } from '../components/ui/alert'
import { AlertTriangle } from 'lucide-react'


export function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Modern Disclosure Banner */}
      <Alert variant="warning" className="mb-12">
        <AlertTriangle className="h-4 w-4" />
        <div className="flex items-center gap-2">
          <span className="font-medium">Important:</span>
          <p>
            We do not DEAL WITH/ON Cryptocurrencies like BTC, USDT, ETH, etc., as it is against
            <a 
              href="#" 
              className="text-kp-yellow hover:text-kp-lime underline underline-offset-4 ml-1 font-medium"
            >
              Nigerian Government Policies
            </a>
          </p>
        </div>
      </Alert>

      {/* Hero Section */}
      <div className="text-center mb-12 space-y-6">
        <h1 className="text-5xl text-kp-white font-bold tracking-tight">
          Exchange your Assets to{' '}
          <span className="text-kp-yellow relative">
            Naira
          </span>
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Launch your{' '}
          <a href="#" className="text-kp-lime hover:text-kp-yellow underline underline-offset-4 font-medium">
            small freelance business
          </a>
          , we'll handle the freelance USD for ₦aira from – Upwork | Fiverr | Toptal | Surveys | Reddit with Zero Fees | Zero Charges | 120% Customer Satisfaction.
        </p>
        
        <div className="flex justify-center items-center gap-6 text-sm">
          <div className="flex items-center px-4 py-2 bg-background/50 rounded-full border shadow-sm">
            <span className="mr-2">⭐</span>
          <span className="text-kp-white">Rated Excellent on</span>
            <a href="#" className="text-kp-lime hover:text-kp-yellow ml-1 font-medium">
              TrustPilot
            </a>
          </div>
          <div className="flex items-center px-4 py-2 bg-background/50 rounded-full border shadow-sm">
            <span className="text-kp-lime font-bold mr-1">A+</span>
            <span className="text-kp-white">Rating on</span>
            <a href="#" className="text-kp-lime hover:text-kp-white ml-1 font-medium">
              X
            </a>
          </div>
        </div>
      </div>

      {/* Price Cards Section */}
      <PriceCards />
    </div>
  )
}