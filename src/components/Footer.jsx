import { Link } from 'react-router-dom'

const FOOTER_IMG = 'https://www.sheltech-bd.com/images/static/footer.png'
const LOGO = 'https://www.sheltech-bd.com/images/static/logo.svg'
const HOTLINE = 'https://www.sheltech-bd.com/images/static/hotline-v2.svg'

export default function Footer() {
  return (
    <footer className="relative bg-ink text-mist overflow-hidden">
      <img
        src={FOOTER_IMG}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="relative z-10 container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <img src={LOGO} alt="Sheltech" className="h-10 brightness-0 invert mb-4" />
            <p className="text-[15px] text-mist/70 leading-relaxed max-w-xs">
              Best real estate developer in Bangladesh — residential &amp; commercial excellence.
            </p>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-widest text-mist/50 mb-4">Explore</h4>
            <ul className="space-y-2 text-[15px]">
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/leaders" className="hover:text-white transition-colors">Leaders</Link></li>
              <li><Link to="/landowner" className="hover:text-white transition-colors">Landowner</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">Media</Link></li>
              <li><Link to="/customer" className="hover:text-white transition-colors">Customer Inquiry</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-widest text-mist/50 mb-4">Contact</h4>
            <img src={HOTLINE} alt="Hotline" className="h-8 mb-3" />
            <p className="text-[15px] text-mist/70">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-[12px] text-mist/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Sheltech Pvt Ltd. All rights reserved.</p>
          <p>Portfolio clone for demonstration</p>
        </div>
      </div>
    </footer>
  )
}
