

export function Footer() {
  return (
    <footer className="bg-card-background border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-kp-yellow">Pay</span>
              <span className="text-text-primary">Parrot</span>
            </h3>
            <p className="text-text-secondary">
              Digital Freelance Payment Solutions for Africa's Remote Workers
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/payparrot" className="text-text-secondary hover:text-kp-yellow transition-colors">
                𝕏.com
              </a>
              <a href="https://tiktok.com/@payparrot" className="text-text-secondary hover:text-kp-yellow transition-colors">
                <img src="/tiktok.svg" alt="TikTok" className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/payparrot" className="text-text-secondary hover:text-kp-yellow transition-colors">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/payparrot" className="text-text-secondary hover:text-kp-yellow transition-colors">
                <img src="/instagram.svg" alt="Instagram" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Exchange Rates
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Freelance Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Client Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Stay Updated</h4>
            <p className="text-text-secondary mb-4">
              Get the latest exchange rates and news directly to your inbox.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-kp-yellow/20 text-text-primary focus:outline-none focus:border-kp-yellow/50"
              />
              <button className="w-full bg-kp-yellow text-black font-semibold py-2 rounded-lg hover:bg-kp-green transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2025 PayParrot. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-text-secondary hover:text-kp-yellow transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
