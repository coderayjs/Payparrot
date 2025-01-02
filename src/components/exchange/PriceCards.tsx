export function PriceCards() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">
        Today's Exchange Rates 💱
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Featured Rate Card */}
        <div className="col-span-1 md:col-span-3 bg-gradient-to-r from-kp-yellow/20 to-kp-green/20 p-1 rounded-2xl">
          <div className="bg-card-background rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all border border-kp-yellow/20">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-kp-yellow">USD to NGN</h3>
                <p className="text-text-secondary">Best Rate Today</p>
              </div>
              <span className="text-3xl font-bold text-kp-green">₦1,234.56</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-kp-green text-sm">↗ +2.3%</span>
              <button className="bg-kp-yellow px-4 py-2 rounded-lg text-black font-semibold hover:bg-kp-green hover:text-white transition-colors">
                Trade Now
              </button>
            </div>
          </div>
        </div>

        {/* Regular Rate Cards */}
        <div className="bg-card-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-kp-yellow/20 hover:border-kp-yellow/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-kp-yellow">EUR to NGN</h3>
              <p className="text-text-secondary">European Rate</p>
            </div>
            <span className="text-2xl font-bold text-kp-green">₦1,345.67</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-red-500 text-sm">↘ -0.5%</span>
            <button className="bg-kp-yellow px-3 py-1.5 rounded-lg text-black font-semibold hover:bg-kp-green hover:text-white transition-colors text-sm">
              Trade Now
            </button>
          </div>
        </div>

        <div className="bg-card-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-kp-yellow/20 hover:border-kp-yellow/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-kp-yellow">GBP to NGN</h3>
              <p className="text-text-secondary">British Rate</p>
            </div>
            <span className="text-2xl font-bold text-kp-green">₦1,567.89</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-kp-green text-sm">↗ +1.2%</span>
            <button className="bg-kp-yellow px-3 py-1.5 rounded-lg text-black font-semibold hover:bg-kp-green hover:text-white transition-colors text-sm">
              Trade Now
            </button>
          </div>
        </div>

        <div className="bg-card-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-kp-yellow/20 hover:border-kp-yellow/50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-kp-yellow">AUD to NGN</h3>
              <p className="text-text-secondary">Australian Rate</p>
            </div>
            <span className="text-2xl font-bold text-kp-green">₦890.12</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-kp-green text-sm">↗ +0.8%</span>
            <button className="bg-kp-yellow px-3 py-1.5 rounded-lg text-black font-semibold hover:bg-kp-green hover:text-white transition-colors text-sm">
              Trade Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="text-center mt-12">
        <button className="bg-kp-yellow px-8 py-4 rounded-xl text-black font-bold hover:bg-kp-green hover:text-white transition-colors shadow-lg hover:shadow-xl">
          View All Exchange Rates 🔄
        </button>
      </div>
    </div>
  )
} 