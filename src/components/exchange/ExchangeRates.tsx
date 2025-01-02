export function ExchangeRates() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Current Exchange Rates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">USD to NGN</h3>
          <div className="text-2xl font-bold text-indigo-600">
            ₦ 1,234.56
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">EUR to NGN</h3>
          <div className="text-2xl font-bold text-indigo-600">
            ₦ 1,345.67
          </div>
        </div>
      </div>
    </div>
  )
} 